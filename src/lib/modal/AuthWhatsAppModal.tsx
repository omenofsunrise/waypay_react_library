import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  isOpen: boolean;
  phone: string;
  isVerifying: boolean;
  error?: string;
  onClose: () => void;
  onSubmit: (code: string) => void;
};

const AuthWhatsAppModal = ({
  isOpen,
  phone,
  isVerifying,
  error,
  onClose,
  onSubmit,
}: Props) => {
  const [code, setCode] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay
      onMouseDown={() => {
        setCode("");
        onClose();
      }}
    >
      <ModalContent onMouseDown={(event) => event.stopPropagation()}>
        <ModalTitle>Подтверждение по WhatsApp</ModalTitle>
        <ModalText>Мы отправили код в WhatsApp на номер:</ModalText>
        <PhoneNumber>{phone}</PhoneNumber>
        <ModalText>Введите полученный код, чтобы завершить авторизацию.</ModalText>

        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (code && !isVerifying) onSubmit(code);
          }}
        >
          <CodeInput
            ref={inputRef}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="Код из WhatsApp"
            value={code}
            onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))}
            disabled={isVerifying}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <SubmitButton type="submit" disabled={!code || isVerifying}>
            {isVerifying ? "Проверка…" : "Подтвердить"}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1000;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 20px;
  color: #333;
`;

const ModalText = styled.p`
  margin: 0 0 15px;
  color: #555;
`;

const PhoneNumber = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin: 16px 0;
  color: rgba(0, 125, 136, 1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;

const CodeInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: rgba(0, 125, 136, 1);
  }

  &:disabled {
    background: #f5f5f5;
  }
`;

const ErrorText = styled.div`
  color: #e74c3c;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, rgba(0, 125, 136, 1), rgba(37, 203, 161, 1));
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default AuthWhatsAppModal;
