import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  isOpen: boolean;
  callPhone: string;
  error?: string;
  onClose?: () => void;
  isVerifying?: boolean;
};

const AuthCallModal = ({ isOpen, callPhone, error, onClose, isVerifying }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handlePhoneClick = () => {
    if (isMobile) {
      window.location.href = `tel:${callPhone}`;
    } else {
      navigator.clipboard.writeText(callPhone);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Подтверждение авторизации</ModalTitle>
        <ModalText>Для завершения авторизации позвоните на номер:</ModalText>
        <CallPhoneNumber onClick={handlePhoneClick} title={isMobile ? 'Позвонить' : 'Копировать номер'} $clickable>
          {callPhone}
          {!isMobile && isCopied && <CopiedText>Скопировано!</CopiedText>}
        </CallPhoneNumber>
        <ModalText>После звонка система автоматически подтвердит вашу авторизацию.</ModalText>
        {isVerifying && <InfoText>Проверяем звонок...</InfoText>}
        {error && <ErrorText>{error}</ErrorText>}
        {onClose && (
          <CloseButton type="button" onClick={onClose}>
            Закрыть
          </CloseButton>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`;

const ModalText = styled.p`
  margin-bottom: 15px;
  color: #555;
`;

const CallPhoneNumber = styled.div<{ $clickable?: boolean }>`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: rgba(0, 125, 136, 1);
  position: relative;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  transition: all 0.2s;

  ${(props) =>
    props.$clickable &&
    `
        &:hover {
            color: rgba(0, 100, 120, 1);
            text-decoration: underline;
        }
        &:active {
            transform: scale(0.98);
        }
    `}
`;

const CopiedText = styled.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`;

const ErrorText = styled.div`
  color: #e74c3c;
  margin: 10px 0;
`;

const InfoText = styled.div`
  color: #4b5563;
  margin: 6px 0;
  font-size: 14px;
`;

const CloseButton = styled.button`
  margin-top: 16px;
  padding: 10px 16px;
  border: none;
  background: rgba(0, 125, 136, 1);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;

export default AuthCallModal;
