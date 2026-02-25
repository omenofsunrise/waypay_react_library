import styled from "styled-components";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: ReactNode;
  bg?: string;
  hoverBg?: string;
  disabledBg?: string;
  textColor?: string;
  fullWidth?: boolean;
  minWidth?: string;
  width?: number | string;
  isPrimary?: boolean;
};

const Button = ({
  children = "Подтвердить",
  icon,
  disabled = false,
  bg,
  hoverBg,
  disabledBg,
  textColor,
  fullWidth = false,
  minWidth,
  width,
  isPrimary = true,
  ...props
}: Props) => {
  const getColors = () => {
    if (bg) {
      return {
        bg,
        hoverBg: hoverBg || bg,
        disabledBg: disabledBg || bg,
        textColor: textColor || (isPrimary ? "white" : "black"),
      };
    }

    if (isPrimary) {
      return {
        bg: "rgba(0, 125, 136, 1)",
        hoverBg: "rgba(0, 150, 163, 1)",
        disabledBg: "rgba(102, 177, 184, 1)",
        textColor: "white",
      };
    }

    return {
      bg: "rgba(209, 213, 219, 1)",
      hoverBg: "rgba(209, 233, 239, 1)",
      disabledBg: "rgba(209, 213, 219, 0.7)",
      textColor: "black",
    };
  };

  const colors = getColors();

  return (
    <ButtonContainer
      disabled={disabled}
      $bg={colors.bg}
      $hoverBg={colors.hoverBg}
      $disabledBg={colors.disabledBg}
      $textColor={colors.textColor}
      $fullWidth={fullWidth}
      $minWidth={minWidth}
      $width={width}
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
  $width?: number | string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 12px;
  background-color: ${({ disabled, $bg, $disabledBg }) =>
    disabled ? $disabledBg : $bg};
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ $textColor }) => $textColor};
  font-size: 18px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  width: ${({ $fullWidth, $width }) => {
    if ($fullWidth) return "100%";
    if ($width) {
      return typeof $width === "number" ? `${$width}px` : $width;
    }
    return "auto";
  }};
  min-width: ${({ $minWidth }) => $minWidth || "auto"};

  &:hover {
    background-color: ${({ disabled, $hoverBg, $disabledBg }) =>
      disabled ? $disabledBg : $hoverBg};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({ $bg }) => $bg === "rgba(209, 213, 219, 1)" 
        ? "rgba(209, 233, 239, 1)" 
        : "rgba(156, 163, 175, 0.5)"};
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

export default Button;