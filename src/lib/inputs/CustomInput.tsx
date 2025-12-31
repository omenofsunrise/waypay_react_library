import styled from 'styled-components';
import React from 'react';

type InputType = 'number' | 'text' | 'fullname' | 'doc' | 'date' | 'rubles' | 'percents';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  customPlaceholder?: string;
  inputType?: InputType;
  hasError?: boolean;
  errorMessage?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder = '',
  customPlaceholder,
  value,
  inputType = 'text',
  onChange,
  hasError = false,
  errorMessage,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const showCustomPlaceholder = Boolean(customPlaceholder && !value && !isFocused);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    let newValue = e.target.value;

    switch (inputType) {
      case 'number':
        if (/^\d*$/.test(newValue)) {
          onChange?.(e);
        }
        break;
      case 'rubles': {
        const cursorPosition = e.target.selectionStart;
        const originalValue = e.target.value;

        let numericValue = originalValue.replace(/[^\d]/g, '');

        if (numericValue === '') {
          e.target.value = '';
          onChange(e);
          break;
        }

        const numberValue = parseInt(numericValue, 10);
        if (!isNaN(numberValue)) {
          let formattedValue = numberValue.toLocaleString('ru-RU');
          formattedValue += ' ₽';

          const digitsBeforeCursor = countDigitsBeforePosition(originalValue, cursorPosition || 0);
          const newCursorPosition = findCursorPositionInFormattedValue(formattedValue, digitsBeforeCursor);

          e.target.value = formattedValue;
          onChange(e);

          setTimeout(() => {
            e.target.setSelectionRange(newCursorPosition, newCursorPosition);
          }, 0);
        }
        break;
      }

      case 'percents': {
        newValue = newValue.replace(/[^\d.]/g, '');

        const parts = newValue.split('.');
        if (parts.length > 2) {
          newValue = parts[0] + '.' + parts.slice(1).join('');
        }

        if (parts.length === 2 && parts[1].length > 2) {
          newValue = parts[0] + '.' + parts[1].slice(0, 2);
        }

        const numValue = parseFloat(newValue);
        if (!isNaN(numValue)) {
          if (numValue > 100) {
            newValue = '100';
          } else if (numValue < 0) {
            newValue = '0';
          }
        }

        if (newValue && newValue !== '') {
          newValue += ' %';

          const currentCursorPos = e.target.selectionStart || 0;
          const valueWithoutPercent = newValue.replace(' %', '');

          e.target.value = newValue;
          onChange(e);

          setTimeout(() => {
            if (currentCursorPos < valueWithoutPercent.length) {
              e.target.setSelectionRange(currentCursorPos, currentCursorPos);
            }
          }, 0);
        } else {
          e.target.value = newValue;
          onChange(e);
        }
        break;
      }

      case 'fullname':
        newValue = newValue.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, '');
        newValue = newValue.replace(/\s{2,}/g, ' ');

        newValue = newValue.replace(/- /g, '-');
        newValue = newValue.replace(/ -/g, ' ');

        let words = newValue.split(' ').filter((word) => word.length > 0);
        words = words.slice(0, 3);

        newValue = words
          .map((word) => {
            if (word.startsWith('-')) {
              word = word.substring(1);
            }

            const hyphenCount = (word.match(/-/g) || []).length;
            if (hyphenCount > 1) {
              const parts = word.split('-');
              word = parts[0] + '-' + parts.slice(1).join('');
            }

            if (word.includes('-')) {
              return word
                .split('-')
                .map((part, index) => {
                  if (part.length === 0) return '';
                  return index > 0 ? part[0].toUpperCase() + part.slice(1).toLowerCase() : part[0].toUpperCase() + part.slice(1).toLowerCase();
                })
                .join('-');
            }
            return word.length > 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : '';
          })
          .join(' ');

        if (newValue.length > 0 && newValue[newValue.length - 1] !== ' ' && e.target.value.length > 0 && e.target.value[e.target.value.length - 1] === ' ') {
          newValue += ' ';
        }

        if (newValue.length > 100) {
          newValue = newValue.slice(0, 100);
        }

        e.target.value = newValue;
        onChange(e);
        break;

      case 'doc':
        newValue = newValue.replace(/\D/g, '');
        if (newValue.length > 4) {
          newValue = `${newValue.slice(0, 4)} ${newValue.slice(4, 10)}`;
        }
        if (newValue.length > 11) {
          newValue = newValue.slice(0, 11);
        }
        e.target.value = newValue;
        onChange(e);
        break;

      case 'date': {
        newValue = newValue.replace(/\D/g, '');

        if (newValue.length > 4) {
          newValue = `${newValue.slice(0, 2)}.${newValue.slice(2, 4)}.${newValue.slice(4, 8)}`;
        } else if (newValue.length > 2) {
          newValue = `${newValue.slice(0, 2)}.${newValue.slice(2, 4)}`;
        }

        if (newValue.length > 10) {
          newValue = newValue.slice(0, 10);
        }

        const isDeleting = (value as string)?.length > newValue.length;
        if (isDeleting && [3, 6].includes(newValue.length)) {
          newValue = newValue.slice(0, newValue.length - 1);
        }

        e.target.value = newValue;
        onChange(e);
        break;
      }

      default:
        onChange(e);
        break;
    }
  };

  const countDigitsBeforePosition = (str: string, position: number): number => {
    let count = 0;
    for (let i = 0; i < Math.min(position, str.length); i++) {
      if (/\d/.test(str[i])) {
        count++;
      }
    }
    return count;
  };

  const findCursorPositionInFormattedValue = (formattedValue: string, digitsBeforeCursor: number): number => {
    let digitsPassed = 0;
    for (let i = 0; i < formattedValue.length; i++) {
      if (digitsPassed >= digitsBeforeCursor) {
        return i;
      }
      if (/\d/.test(formattedValue[i])) {
        digitsPassed++;
      }
    }
    return formattedValue.length;
  };

  return (
    <InputContainer>
      <StyledInput
        {...props}
        value={value}
        placeholder={showCustomPlaceholder ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        onChange={handleInputChange}
        inputMode={inputType === 'number' || inputType === 'doc' || inputType === 'date' || inputType === 'rubles' || inputType === 'percents' ? 'numeric' : 'text'}
        maxLength={inputType === 'doc' ? 11 : inputType === 'date' ? 10 : undefined}
        hasError={hasError}
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

const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 10px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? 'rgba(239, 68, 68, 1)' : 'rgba(209, 213, 219, 1)')};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  min-height: 38px;
  box-sizing: border-box;
  max-width: 500px;
  background-color: white;
  color: black;
  padding: 5px;
  padding-left: 15px;

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

export default CustomInput;
