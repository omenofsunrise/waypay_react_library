import styled from 'styled-components';
import React from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  tabIndex?: number;
};

const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  const withPrefix = cleaned.startsWith('8') || cleaned.length === 0 ? cleaned : `8${cleaned}`;
  const trimmed = withPrefix.slice(0, 11);

  let formattedValue = '';

  if (trimmed.length > 0) {
    formattedValue += '8';
  }
  if (trimmed.length > 1) {
    formattedValue += ` (${trimmed.slice(1, 4)}`;
  }
  if (trimmed.length > 4) {
    formattedValue += `) ${trimmed.slice(4, 7)}`;
  }
  if (trimmed.length > 7) {
    formattedValue += `-${trimmed.slice(7, 9)}`;
  }
  if (trimmed.length > 9) {
    formattedValue += `-${trimmed.slice(9, 11)}`;
  }

  return formattedValue;
};

const CustomPhoneInput = ({ value, onChange, placeholder = '8 (xxx) xxx-xx-xx', tabIndex }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    onChange(formattedPhone);
  };

  return (
    <StyledInput type="text" value={value} onChange={handleChange} placeholder={placeholder} maxLength={18} tabIndex={tabIndex} />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  font-size: 16px;
  border: 2px solid rgba(0, 125, 136, 0.5);
  border-radius: 8px;
  padding: 0 15px;
  color: rgba(0, 125, 136, 1);
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: rgba(37, 203, 161, 1);
    box-shadow: 0 0 0 0.2rem rgba(37, 203, 161, 0.25);
    background-color: rgba(255, 255, 255, 1);
  }
`;

export default CustomPhoneInput;
