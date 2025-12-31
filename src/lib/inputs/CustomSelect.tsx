import styled from 'styled-components';
import React from 'react';

interface CustomSelectProps<T = string> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  placeholder?: string;
  customPlaceholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  options: { value: T; label: string }[];
  value?: T;
  onChange?: (event: { target: { value: T } }) => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

const CustomSelect = <T extends string | number = string>({
  placeholder = '',
  customPlaceholder,
  value,
  onChange,
  hasError = false,
  errorMessage,
  options,
  name,
  disabled = false,
  required = false,
  ...props
}: CustomSelectProps<T>) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  const showCustomPlaceholder = Boolean(customPlaceholder && !value && !isFocused);

  const handleOptionClick = (optionValue: T) => {
    if (onChange && !disabled) {
      const event = {
        target: { value: optionValue, name },
      };
      onChange(event);
    }
    setIsOpen(false);
    setIsFocused(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setIsFocused(!isOpen);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : '';

  return (
    <InputContainer ref={selectRef} {...props}>
      <SelectContainer>
        <StyledSelect
          hasError={hasError}
          isOpen={isOpen}
          disabled={disabled}
          onClick={toggleDropdown}
          onFocus={() => !disabled && setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          tabIndex={disabled ? -1 : 0}
        >
          <SelectValue>{displayValue || (placeholder && <PlaceholderText>{placeholder}</PlaceholderText>)}</SelectValue>
          <SelectArrow isOpen={isOpen} disabled={disabled}>
            <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1L8.5 8L15.5 1" stroke={disabled ? '#CCCCCC' : '#50555C'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SelectArrow>
        </StyledSelect>

        {isOpen && (
          <Dropdown>
            {options.map((option) => (
              <OptionItem key={option.value} $isSelected={option.value === value} onClick={() => handleOptionClick(option.value)}>
                <RadioButton $isSelected={option.value === value}>{option.value === value && <RadioButtonInner />}</RadioButton>
                <OptionLabel>{option.label}</OptionLabel>
              </OptionItem>
            ))}
          </Dropdown>
        )}
      </SelectContainer>

      {customPlaceholder && <PlaceholderLabel isVisible={showCustomPlaceholder}>{customPlaceholder}</PlaceholderLabel>}

      {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <HiddenSelect name={name} value={value || ''} onChange={() => {}} tabIndex={-1} required={required}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </HiddenSelect>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`;

const SelectContainer = styled.div`
  position: relative;
  width: auto;
  max-width: 500px;
`;

const StyledSelect = styled.div<{ hasError?: boolean; isOpen: boolean; disabled?: boolean }>`
  border: 1px solid
    ${({ hasError, isOpen, disabled }) =>
      disabled ? 'rgba(209, 213, 219, 0.5)' : hasError ? 'rgba(239, 68, 68, 1)' : isOpen ? 'rgba(0, 125, 136, 1)' : 'rgba(209, 213, 219, 1)'};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  box-sizing: border-box;
  background-color: ${({ disabled }) => (disabled ? 'rgba(249, 250, 251, 1)' : 'white')};
  color: ${({ disabled }) => (disabled ? 'rgba(156, 163, 175, 1)' : 'black')};
  padding: 10px 15px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  max-height: 37.5px;

  &:hover {
    border-color: ${({ hasError, disabled, isOpen }) => (disabled ? 'rgba(209, 213, 219, 0.5)' : hasError ? 'rgba(239, 68, 68, 1)' : isOpen ? 'rgba(0, 125, 136, 1)' : 'rgba(0, 125, 136, 1)')};
  }
`;

const SelectValue = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PlaceholderText = styled.span`
  color: rgba(80, 85, 92, 1);
`;

const SelectArrow = styled.div<{ isOpen: boolean; disabled?: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 1001;
  max-height: 300px;
  overflow-y: auto;
`;

const OptionItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  text-align: left;
  background: ${({ $isSelected }) => ($isSelected ? 'rgba(232, 216, 216, 1)' : 'transparent')};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const RadioButton = styled.div<{ $isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? '#007D88' : '#ADB3BC')};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const RadioButtonInner = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`;

const OptionLabel = styled.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;

const PlaceholderLabel = styled.label<{ isVisible: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
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

const HiddenSelect = styled.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;

export default CustomSelect;
