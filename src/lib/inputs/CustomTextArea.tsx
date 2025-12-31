import styled from 'styled-components';
import React from 'react';

interface CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  customPlaceholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  placeholder = '',
  customPlaceholder,
  value,
  onChange,
  hasError = false,
  errorMessage,
  rows = 3,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const showCustomPlaceholder = Boolean(customPlaceholder && !value && !isFocused);

  return (
    <InputContainer>
      <StyledTextArea
        {...props}
        value={value}
        placeholder={showCustomPlaceholder ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        onChange={onChange}
        hasError={hasError}
        rows={rows}
      />
      {customPlaceholder && <PlaceholderLabel isVisible={showCustomPlaceholder}>{customPlaceholder}</PlaceholderLabel>}
      {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`;

const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 10px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? 'rgba(239, 68, 68, 1)' : 'rgba(209, 213, 219, 1)')};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  min-height: 38px;
  box-sizing: border-box;
  max-width: 500px;
  background-color: white;
  color: black;
  padding: 12px 15px;
  resize: vertical;
  font-family: inherit;

  &:hover {
    border-color: ${({ hasError }) => (hasError ? 'rgba(239, 68, 68, 1)' : 'rgba(0, 125, 136, 1)')};
  }

  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'rgba(239, 68, 68, 1)' : 'rgba(0, 125, 136, 1)')};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`;

const PlaceholderLabel = styled.label<{ isVisible: boolean }>`
  position: absolute;
  left: 12px;
  top: 12px;
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  background-color: white;
  padding: 0 4px;
`;

const ErrorMessage = styled.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

export default CustomTextArea;
