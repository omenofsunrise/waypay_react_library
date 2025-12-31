import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CustomPhoneInput from '../inputs/CustomPhoneInput';
import AuthCallModal from '../modal/AuthCallModal';
import { confirmCallAuth, initiateCallAuth, type UserType } from '../api/authCall';
import { authStorage } from '../utils/authStorage';

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
};

const AuthPage: React.FC<AuthPageProps> = ({
  onLoginSuccess,
  userType = 'delivery_operator',
  title = 'Авторизация',
  submitLabel = 'Войти',
  placeholder = '8 (xxx) xxx-xx-xx',
  supportPhone = '8 989 924 24 24',
  supportLinkUrl = 'https://info.waypay.one',
  supportLinkText = 'info.waypay.one',
  brand,
  className,
  style,
  pollingIntervalMs = 3000,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [rawPhone, setRawPhone] = useState('');
  const [showCallModal, setShowCallModal] = useState(false);
  const [callPhone, setCallPhone] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const verificationInterval = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (verificationInterval.current) {
        clearInterval(verificationInterval.current);
      }
    };
  }, []);

  const normalizePhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (!digits) return '';
    if (digits.startsWith('8')) return `+7${digits.slice(1)}`;
    if (digits.startsWith('7')) return `+${digits}`;
    return `+${digits}`;
  };

  const closeModal = () => {
    setShowCallModal(false);
    if (verificationInterval.current) {
      window.clearInterval(verificationInterval.current);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawPhone) {
      setVerificationError('Введите номер телефона');
      return;
    }

    setIsLoading(true);
    setVerificationError('');
    const normalizedPhone = normalizePhone(rawPhone);

    try {
      const response = await initiateCallAuth(normalizedPhone, userType);
      setCallPhone(response.call_phone);
      setShowCallModal(true);
      startVerificationPolling(normalizedPhone, response.check_id);
    } catch (error: unknown) {
      console.error('Auth error:', error);
      setVerificationError('Не удалось инициировать авторизацию. Проверьте номер.');
    } finally {
      setIsLoading(false);
    }
  };

  const startVerificationPolling = (phone: string, id: string) => {
    if (verificationInterval.current) {
      window.clearInterval(verificationInterval.current);
    }

    verificationInterval.current = window.setInterval(() => {
      verifyAuth(phone, id);
    }, pollingIntervalMs);
  };

  const verifyAuth = async (phone: string, id: string) => {
    if (isVerifying) return;

    setIsVerifying(true);
    try {
      const response = await confirmCallAuth(phone, id, userType);
      if (response.access_token && response.refresh_token) {
        authStorage.setTokens(response.access_token, response.refresh_token);

        if (verificationInterval.current) {
          window.clearInterval(verificationInterval.current);
        }
        setShowCallModal(false);
        onLoginSuccess(response.access_token);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationError('Ошибка проверки авторизации');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <AuthContainer className={className} style={style}>
      <AuthCard>
        <Logo>{brand ?? <LogoText>WayPay</LogoText>}</Logo>

        <AuthForm onSubmit={handleSubmit}>
          <Title>{title}</Title>

          <FormGroup>
            <InputContainer>
              <CustomPhoneInput value={rawPhone} onChange={(value: string) => setRawPhone(value)} placeholder={placeholder} />
            </InputContainer>
          </FormGroup>

          {verificationError && (
            <ErrorBanner>
              <span>{verificationError}</span>
            </ErrorBanner>
          )}

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader>
                <LoaderCircle />
                <LoaderCircle />
                <LoaderCircle />
              </Loader>
            ) : (
              submitLabel
            )}
          </SubmitButton>
        </AuthForm>
        <InfoText>
          Хотите получить доступ к нашим продуктам?
          <br />
          Обратитесь по номеру <InfoPhone href={`tel:${supportPhone}`}>{supportPhone}</InfoPhone>
          <br />
          или оставьте заявку на{' '}
          <InfoLink href={supportLinkUrl} target="_blank" rel="noreferrer">
            {supportLinkText}
          </InfoLink>
        </InfoText>
      </AuthCard>

      <AuthCallModal isOpen={showCallModal} onClose={closeModal} callPhone={callPhone} isVerifying={isVerifying} error={verificationError} />
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`;

const AuthCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, rgba(0, 125, 136, 1) 0%, rgba(37, 203, 161, 1) 100%);
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;

const LogoText = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: rgba(0, 125, 136, 1);
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

const InputContainer = styled.div`
  position: relative;
  width: auto;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, rgba(0, 125, 136, 1) 0%, rgba(37, 203, 161, 1) 100%);
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
    background: linear-gradient(90deg, rgba(0, 125, 136, 0.5) 0%, rgba(37, 203, 161, 0.5) 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 24px;
`;

const LoaderCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  animation: bounce 1s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
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
