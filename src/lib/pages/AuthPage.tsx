import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CustomPhoneInput from "../inputs/CustomPhoneInput";
import AuthCallModal from "../modal/AuthCallModal";
import AuthWhatsAppModal from "../modal/AuthWhatsAppModal";
import {
  confirmCallAuth,
  initiateCallAuth,
  type AuthWay,
  type UserType,
} from "../api/authCall";
import AuthNameModal from "../modal/AuthNameModal";

type AuthPageProps = {
  onLoginSuccess: (token: string) => void;
  userType?: UserType;
  title?: string;
  submitLabel?: string;
  placeholder?: string;
  supportPhone?: string;
  supportLinkUrl?: string;
  supportLinkText?: string;
  brand?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  pollingIntervalMs?: number;
  enableRegistration?: boolean;
  enableSupport?: boolean;
};

const AuthPage: React.FC<AuthPageProps> = ({
  onLoginSuccess,
  userType = "delivery_operator",
  title = "Авторизация",
  submitLabel = "Войти",
  placeholder = "8 (xxx) xxx-xx-xx",
  supportPhone = "8 989 924 24 24",
  supportLinkUrl = "https://waypay.one",
  supportLinkText = "waypay.one",
  className,
  style,
  pollingIntervalMs = 3000,
  enableRegistration = false,
  enableSupport = true,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [rawPhone, setRawPhone] = useState("");
  const [authWay, setAuthWay] = useState<AuthWay>("CallCheck");
  const [showCallModal, setShowCallModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [callPhone, setCallPhone] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  
  const [showNameModal, setShowNameModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState("");
  const [pendingAuthData, setPendingAuthData] = useState<{
    phone: string;
    checkId: string;
    callPhone: string;
  } | null>(null);

  const verificationInterval = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (verificationInterval.current) {
        clearInterval(verificationInterval.current);
      }
    };
  }, []);

  const normalizePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "";
    if (digits.startsWith("8")) return `+7${digits.slice(1)}`;
    if (digits.startsWith("7")) return `+${digits}`;
    return `+${digits}`;
  };

  const closeAllModals = () => {
    setShowCallModal(false);
    setShowWhatsAppModal(false);
    setShowNameModal(false);
    setFullName("");
    setNameError("");
    setPendingAuthData(null);
    if (verificationInterval.current) {
      window.clearInterval(verificationInterval.current);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawPhone) {
      setVerificationError("Введите номер телефона");
      return;
    }

    setIsLoading(true);
    setVerificationError("");
    const normalizedPhone = normalizePhone(rawPhone);

    try {
      const response = await initiateCallAuth(normalizedPhone, userType, authWay);
      
      setPendingAuthData({
        phone: normalizedPhone,
        checkId: response.check_id,
        callPhone: response.call_phone,
      });
      
      const nameRequired = enableRegistration && 'name_required' in response && response.name_required;
      
      if (nameRequired) {
        setShowNameModal(true);
        setCallPhone(response.call_phone);
      } else if (!enableRegistration && 'name_required' in response && response.name_required) {
        setVerificationError(
          "Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."
        );
        setPendingAuthData(null);
      } else if (authWay === "WhatsAppCode") {
        setShowWhatsAppModal(true);
      } else {
        setCallPhone(response.call_phone);
        setShowCallModal(true);
        startVerificationPolling(normalizedPhone, response.check_id);
      }
    } 
    catch (error: any) {
        console.error("Auth error:", error);
        
        if (error && error.response && error.response.data) {
          setVerificationError(error.response.data);
        } else if (error instanceof Error) {
          setVerificationError(error.message);
        } else {
          setVerificationError("Произошла ошибка при авторизации");
        }
      } finally {
        setIsLoading(false);
      }
    };

  const handleNameSubmit = async (name: string) => {
    if (!name.trim()) {
      setNameError("Введите ФИО");
      return;
    }

    if (!pendingAuthData) return;

    setIsLoading(true);
    setNameError("");

    try {
      setFullName(name);
      
      setShowNameModal(false);
      
      if (authWay === "WhatsAppCode") {
        setShowWhatsAppModal(true);
      } else {
        setShowCallModal(true);
        startVerificationPolling(pendingAuthData.phone, pendingAuthData.checkId, name);
      }
    } catch (error: unknown) {
      console.error("Registration error:", error);
      setNameError("Не удалось завершить регистрацию");
    } finally {
      setIsLoading(false);
    }
  };

  const startVerificationPolling = (phone: string, id: string, name?: string) => {
    if (verificationInterval.current) {
      window.clearInterval(verificationInterval.current);
    }

    verificationInterval.current = window.setInterval(() => {
      verifyAuth(phone, id, name);
    }, pollingIntervalMs);
  };

  const verifyAuth = async (phone: string, id: string, name?: string) => {
    if (isVerifying) return;

    setIsVerifying(true);
    try {
      const response = await confirmCallAuth(
        phone,
        id,
        userType,
        name || fullName,
        "CallCheck",
      );
      if ((response.access_token && response.refresh_token) || (response.accessToken && response.refreshToken)) {

        if (verificationInterval.current) {
          window.clearInterval(verificationInterval.current);
        }
        setShowCallModal(false);
        setShowNameModal(false);
        setFullName("");
        setPendingAuthData(null);
        onLoginSuccess(response.access_token ?? response.accessToken);
      }
    } catch (error) {
      console.error("Verification error:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  const verifyWhatsAppCode = async (code: string) => {
    if (isVerifying || !pendingAuthData) return;

    setIsVerifying(true);
    setVerificationError("");
    try {
      const response = await confirmCallAuth(
        pendingAuthData.phone,
        code,
        userType,
        fullName || undefined,
        "WhatsAppCode",
      );

      if (
        (response.access_token && response.refresh_token) ||
        (response.accessToken && response.refreshToken)
      ) {
        setShowWhatsAppModal(false);
        setFullName("");
        setPendingAuthData(null);
        onLoginSuccess(response.access_token ?? response.accessToken);
      } else {
        setVerificationError("Неверный код. Попробуйте ещё раз.");
      }
    } catch (error: unknown) {
      console.error("WhatsApp verification error:", error);
      const message = error instanceof Error ? error.message : undefined;
      setVerificationError(
        message || "Неверный код. Попробуйте ещё раз.",
      );
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <AuthContainer className={className} style={style}>
      <AuthCard>
        <AuthForm onSubmit={handleSubmit}>
          <Title>{title}</Title>

          <FormGroup>
            <InputContainer>
              <CustomPhoneInput
                value={rawPhone}
                onChange={(value: string) => setRawPhone(value)}
                placeholder={placeholder}
              />
            </InputContainer>
          </FormGroup>

          <MethodToggle role="tablist" aria-label="Способ авторизации">
            <MethodOption
              type="button"
              role="tab"
              aria-selected={authWay === "CallCheck"}
              $active={authWay === "CallCheck"}
              onClick={() => setAuthWay("CallCheck")}
            >
              Звонок
            </MethodOption>
            <MethodOption
              type="button"
              role="tab"
              aria-selected={authWay === "WhatsAppCode"}
              $active={authWay === "WhatsAppCode"}
              onClick={() => setAuthWay("WhatsAppCode")}
            >
              WhatsApp
            </MethodOption>
          </MethodToggle>

          {verificationError && (
            <ErrorBanner>
              <span>{verificationError}</span>
            </ErrorBanner>
          )}

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Загрузка..." : submitLabel}
          </SubmitButton>
        </AuthForm>
        
        {enableSupport && (
          <InfoText>
            Хотите получить доступ к нашим продуктам?
            <br />
            Обратитесь по номеру{" "}
            <InfoPhone href={`tel:${supportPhone}`}>{supportPhone}</InfoPhone>
            <br />
            или оставьте заявку на{" "}
            <InfoLink href={supportLinkUrl} target="_blank" rel="noreferrer">
              {supportLinkText}
            </InfoLink>
          </InfoText>
        )}
      </AuthCard>

      {/* Модалка для ввода ФИО */}
      <AuthNameModal
        isOpen={showNameModal}
        onClose={closeAllModals}
        onSubmit={handleNameSubmit}
        error={nameError}
        isLoading={isLoading}
      />

      {/* Модалка с номером для звонка */}
      <AuthCallModal
        isOpen={showCallModal}
        onClose={closeAllModals}
        callPhone={callPhone}
        error={verificationError}
      />

      <AuthWhatsAppModal
        isOpen={showWhatsAppModal}
        onClose={closeAllModals}
        onSubmit={verifyWhatsAppCode}
        phone={pendingAuthData?.phone ?? normalizePhone(rawPhone)}
        isVerifying={isVerifying}
        error={verificationError}
      />
    </AuthContainer>
  );
};

// Обновленные стили
const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`;

const AuthCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  max-height: calc(100vh - 40px); /* Ограничиваем высоту с учетом padding контейнера */
  overflow-y: auto; /* Добавляем прокрутку внутри карточки если контент не помещается */
  padding: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 1) 0%,
      rgba(37, 203, 161, 1) 100%
    );
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    max-height: calc(100vh - 40px);
  }

  /* Скрываем скроллбар для Chrome, Safari и Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Скрываем скроллбар для IE, Edge и Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const MethodToggle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #f1f4f5;
`;

const MethodOption = styled.button<{ $active: boolean }>`
  border: 0;
  border-radius: 8px;
  padding: 11px 14px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#667085")};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(90deg, rgba(0, 125, 136, 1), rgba(37, 203, 161, 1))"
      : "transparent"};
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 8px rgba(0, 125, 136, 0.18)" : "none"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
`;

const InputContainer = styled.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    90deg,
    rgba(0, 125, 136, 1) 0%,
    rgba(37, 203, 161, 1) 100%
  );
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 125, 136, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 0.5) 0%,
      rgba(37, 203, 161, 0.5) 100%
    );
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const InfoText = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const InfoPhone = styled.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoLink = styled.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff6f5;
  color: #b42318;
  border: 1px solid #f8d7da;
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  box-shadow: 0 6px 14px rgba(180, 35, 24, 0.08);
`;

export default AuthPage;
