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
        <Title>Регистрация</Title>

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
            <DefaultButton isPrimary={false} type="button" onClick={onClose} disabled={isLoading}>
              Отмена
            </DefaultButton>

            <DefaultButton type="submit" disabled={isLoading}>
              {isLoading ? "Загрузка..." : "Продолжить"}
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

const Title = styled.h2`
  margin: 0;
  padding: 0;

  flex: 1;
  min-width: 0;
  display: block;

  font-size: 27px;
  line-height: 1.25;
  font-weight: 700;
  color: #0f172a;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.h2`
  display: block;
  font-size: 21px;
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
  justify-content: space-between;
  width: 100%; // Убедитесь, что контейнер занимает всю доступную ширину
`;

export default AuthNameModal;