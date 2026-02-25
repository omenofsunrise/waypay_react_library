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
        <Form onSubmit={handleSubmit}>
          <InputLabel>Как вас зовут?</InputLabel>
          <InputRow>
            <CustomInput
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Иванов Иван Иванович"
              disabled={isLoading}
              autoFocus
              style={{ flex: 1 }}
            />
            <SubmitButton 
              type="submit" 
              disabled={isLoading || !fullName.trim()}
            >
              {isLoading ? "..." : "→"}
            </SubmitButton>
          </InputRow>
          {error && <FieldError>{error}</FieldError>}
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
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SubmitButton = styled(DefaultButton)`
  width: auto;
  min-width: 50px;
  height: 40px;
  padding: 0 10px;
  font-size: 20px;
  border-radius: 8px;
  white-space: nowrap;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FieldError = styled.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`;

export default AuthNameModal;