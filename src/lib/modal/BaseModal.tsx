import React, { type ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import DefaultButton from "../buttons/DefaultButton";

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
  width = "560px",
  saveButtonText = "Сохранить",
  customLayout,
}) => {
  const isViewMode = mode === "view";
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const handleBackdropMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <Backdrop onMouseDown={handleBackdropMouseDown} role="presentation">
      <Dialog
        ref={dialogRef}
        $width={width}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Диалог"}
        tabIndex={-1}
      >
        <Header>
          <Title>{title}</Title>
          <IconButton type="button" onClick={onClose} aria-label="Закрыть">
            <span aria-hidden>×</span>
          </IconButton>
        </Header>

        {customLayout ? <TopSlot>{customLayout}</TopSlot> : null}

        <Form onSubmit={onSave}>
          <Body>{children}</Body>

          <Footer>
            <LeftActions>
              {!hideCanselButton ? (
                <CancelButton isPrimary={false} onClick={handleCancel}>
                  Отменить
                </CancelButton>
              ) : null}
            </LeftActions>

            <RightActions>
              {!isViewMode && !hideSaveButton ? (
                <SaveButton
                  type="submit"
                  disabled={isSaveDisabled || isSubmitting}
                >
                  {isSubmitting ? "Сохранение..." : saveButtonText}
                </SaveButton>
              ) : null}
            </RightActions>
          </Footer>
        </Form>
      </Dialog>
    </Backdrop>
  );
};

export default BaseModal;
export { Header as ModalHeader, Title as ModalTitle };

/* ===================== styles ===================== */

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`;

const Dialog = styled.div<{ $width: string }>`
  width: min(100%, ${({ $width }) => $width});
  max-height: min(85vh, 720px);
  height: fit-content;

  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 16px;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  outline: none;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;

  flex: 1;
  min-width: 0;
  display: block;

  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #0f172a;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 2px;

  display: grid;
  place-items: center;

  border: none;
  border-radius: 0;
  background: transparent;
  color: rgba(15, 23, 42, 0.75);
  cursor: pointer;
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;

  font-size: 26px;
  line-height: 1;

  &:hover {
    background: transparent;
    color: rgba(15, 23, 42, 0.9);
  }

  &:active {
    transform: none;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

const TopSlot = styled.div`
  padding: 12px 18px 0 18px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`;

const Body = styled.div`
  padding: 12px 18px 16px 18px;
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  color: #111827;

  & > * {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Footer = styled.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;

const LeftActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CancelButton = styled(DefaultButton)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`;

const SaveButton = styled(DefaultButton)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`;