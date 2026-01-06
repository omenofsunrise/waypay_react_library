import React, { type ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import DarkCyanButton from "../buttons/DefaultButton";

export type ModalMode =
  | "create"
  | "edit"
  | "view"
  | "create-pool"
  | "edit-pool";

interface ModalProps {
  title?: string;
  onClose: () => void;
  onCancel: () => void;
  onSave?: (e: React.FormEvent) => void;
  children: ReactNode;
  isSaveDisabled?: boolean;
  isSubmitting?: boolean;
  mode?: ModalMode;
  hideSaveButton?: boolean;
  hideCanselButton?: boolean;
  width?: string;
  saveButtonText?: string;
  customLayout?: React.ReactNode;
}

const BaseModal: React.FC<ModalProps> = ({
  title,
  onClose,
  onCancel,
  onSave,
  children,
  isSaveDisabled = false,
  isSubmitting = false,
  mode = "create",
  hideSaveButton = false,
  hideCanselButton = false,
  width = "562px",
  saveButtonText = "Сохранить",
  customLayout,
}) => {
  const isViewMode = mode === "view";
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    onCancel();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <ModalBackdrop>
      <ModalContainer width={width} ref={modalRef}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <div className="modal-body">{customLayout}</div>
        <ModalForm onSubmit={onSave}>
          <ModalContent>{children}</ModalContent>

          <ModalFooter>
            {!hideCanselButton && (
              <CancelButton onClick={handleCancel}>Отменить</CancelButton>
            )}
            {!isViewMode && !hideSaveButton && (
              <DarkCyanButton
                style={{
                  minWidth: "136px",
                  padding: "10p 20px",
                  borderRadius: "10px",
                  fontSize: "16px",
                }}
                type="submit"
                disabled={isSaveDisabled || isSubmitting}
              >
                {isSubmitting ? "Сохранение..." : saveButtonText || "Сохранить"}
              </DarkCyanButton>
            )}
          </ModalFooter>
        </ModalForm>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default BaseModal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: auto;
  background-color: rgba(249, 250, 250, 1);
  border: 1px solid rgba(173, 179, 188, 1);
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), 0 0 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  margin: 0;
  overflow: visible;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: visible;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`;

export const ModalTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #000;
  margin-left: 25px;
  margin-bottom: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  z-index: 1;

  &:hover {
    color: #000;
  }
`;

const ModalContent = styled.div`
  flex: 1;
  margin-bottom: 20px;
  min-height: 0;
  overflow: visible;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px 20px 30px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: rgba(209, 213, 219, 1);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 136px;
  color: black;

  &:hover {
    background-color: rgba(209, 213, 219, 0.8);
  }
`;
