import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ id, name, checked, onChange, children }) => {
  return (
    <RadioButtonLabel htmlFor={id}>
      <RadioButtonInput type="radio" id={id} name={name} checked={checked} onChange={onChange} />
      {children}
    </RadioButtonLabel>
  );
};

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`;

const RadioButtonInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(173, 179, 188, 1);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: rgba(249, 250, 250, 1);
  transition: all 0.2s ease;

  &:checked {
    border-color: rgba(0, 125, 136, 1);
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: rgba(0, 125, 136, 1);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default RadioButton;
