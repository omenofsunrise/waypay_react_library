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

  width?: string; // например "440px"
  saveButtonText?: string;

  /** если хочешь вставить кастомный блок над form/body */
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

  // ESC + блокировка скролла
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // фокус в диалог
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const handleBackdropMouseDown = (e: React.MouseEvent) => {
    // закрываем только если кликнули именно в фон, а не в модалку
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
            {!hideCanselButton ? (
              <SecondaryButton type="button" onClick={handleCancel}>
                Отменить
              </SecondaryButton>
            ) : null}

            {!isViewMode && !hideSaveButton ? (
              <PrimaryButton
                type="submit"
                disabled={isSaveDisabled || isSubmitting}
              >
                {isSubmitting ? "Сохранение..." : saveButtonText}
              </PrimaryButton>
            ) : null}
          </Footer>
        </Form>
      </Dialog>
    </Backdrop>
  );
};

export default BaseModal;

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
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
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

  /* чтобы длинные заголовки не ломали верстку */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 10px;

  background: #ffffff;
  color: rgba(15, 23, 42, 0.75);
  cursor: pointer;

  font-size: 26px;
  line-height: 1;

  &:hover {
    background: rgba(15, 23, 42, 0.04);
    color: rgba(15, 23, 42, 0.9);
  }

  &:active {
    transform: translateY(1px);
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

  color: #111827;
`;

const Footer = styled.div`
  padding: 12px 18px 18px 18px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
`;

const SecondaryButton = styled.button`
  min-width: 140px;
  padding: 10px 16px;

  border: 1px solid rgba(15, 23, 42, 0.14);
  border-radius: 10px;

  background: #f3f4f6;
  color: #0f172a;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #e5e7eb;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const PrimaryButton = styled(DefaultButton)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`;
