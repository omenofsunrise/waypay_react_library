import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  label?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange, className, label, disabled = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    if (disabled || !onChange) return;
    onChange(!checked);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <CheckboxWrapper className={className} onClick={handleClick} onKeyPress={handleKeyPress} tabIndex={disabled ? -1 : 0} disabled={disabled}>
      <CheckboxContainer
        checked={checked}
        isFocused={isFocused}
        disabled={disabled}
        onMouseEnter={() => !disabled && setIsFocused(true)}
        onMouseLeave={() => !disabled && setIsFocused(false)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => !disabled && setIsFocused(false)}
      >
        {checked && (
          <Checkmark viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" disabled={disabled}>
            <path d="M7.375 1.1875L2.65 6.8125L0.625 4.5625" stroke={disabled ? 'rgba(173, 179, 188, 1)' : 'white'} strokeLinecap="round" strokeLinejoin="round" />
          </Checkmark>
        )}
      </CheckboxContainer>
      {label && <Label disabled={disabled}>{label}</Label>}
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  gap: 8px;

  &:focus {
    outline: none;
  }
`;

const CheckboxContainer = styled.div<{ checked: boolean; isFocused: boolean; disabled: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  border: 1px solid
    ${(props) => {
      if (props.disabled) {
        return props.checked ? 'rgba(173, 179, 188, 1)' : 'rgba(230, 230, 230, 1)';
      }
      return props.checked ? 'rgba(0, 125, 136, 1)' : props.isFocused ? 'rgba(0, 125, 136, 1)' : 'rgba(173, 179, 188, 1)';
    }};

  background-color: ${(props) => {
    if (props.disabled) {
      return props.checked ? 'rgba(230, 230, 230, 1)' : 'transparent';
    }
    return props.checked ? 'rgba(0, 125, 136, 1)' : 'transparent';
  }};

  box-shadow: ${(props) => {
    if (props.disabled) return 'none';
    return props.checked && props.isFocused ? '0 0 0 4px rgba(121, 159, 162, 0.33)' : 'none';
  }};

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const Label = styled.span<{ disabled: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.disabled ? 'rgba(173, 179, 188, 1)' : '#333')};
  user-select: none;
  white-space: nowrap;
`;

const Checkmark = styled.svg<{ disabled: boolean }>`
  width: 8px;
  height: 8px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default Checkbox;
