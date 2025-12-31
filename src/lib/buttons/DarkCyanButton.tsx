import styled from 'styled-components';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: ReactNode;
  bg?: string;
  hoverBg?: string;
  disabledBg?: string;
  textColor?: string;
  fullWidth?: boolean;
  minWidth?: string;
};

const DarkCyanButton = ({
  children = 'Подтвердить',
  icon,
  disabled = false,
  bg = 'rgba(0, 125, 136, 1)',
  hoverBg = 'rgba(0, 150, 163, 1)',
  disabledBg = 'rgba(102, 177, 184, 1)',
  textColor = 'white',
  fullWidth = false,
  minWidth,
  ...props
}: Props) => {
  return (
    <ButtonContainer
      disabled={disabled}
      $bg={bg}
      $hoverBg={hoverBg}
      $disabledBg={disabledBg}
      $textColor={textColor}
      $fullWidth={fullWidth}
      $minWidth={minWidth}
      {...props}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <span>{children}</span>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{
  disabled: boolean;
  $bg: string;
  $hoverBg: string;
  $disabledBg: string;
  $textColor: string;
  $fullWidth: boolean;
  $minWidth?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled, $bg, $disabledBg }) => (disabled ? $disabledBg : $bg)};
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ $textColor }) => $textColor};
  font-size: 15px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  min-width: ${({ $minWidth }) => $minWidth || 'auto'};

  &:hover {
    background-color: ${({ disabled, $hoverBg, $disabledBg }) => (disabled ? $disabledBg : $hoverBg)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

export default DarkCyanButton;
