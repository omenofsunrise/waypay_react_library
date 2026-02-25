import React, { useState } from "react";
import styled from "styled-components";
import CustomInput from "../inputs/CustomInput";
import { DefaultButton } from "../..";

type AuthNameModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
  error?: string;
  isLoading?: boolean;
};

const AuthNameModal: React.FC<AuthNameModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  error,
  isLoading = false
}) => {
  const [fullName, setFullName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(fullName);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Регистрация</ModalTitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputLabel>Как вас зовут?</InputLabel>
            <CustomInput
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Иванов Иван Иванович"
              disabled={isLoading}
              autoFocus
            />
            {error && <FieldError>{error}</FieldError>}
          </FormGroup>

          <ButtonGroup>
            <DefaultButton type="submit" disabled={isLoading}>
              {isLoading ? "Загрузка..." : "Продолжить"}
            </DefaultButton>
            <DefaultButton isPrimary={false} type="button" onClick={onClose} disabled={isLoading}>
              Отмена
            </DefaultButton>
          </ButtonGroup>
        </Form>
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
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
`;

const FieldError = styled.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export default AuthNameModal;