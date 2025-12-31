import React from 'react';
import styled from 'styled-components';

interface EntitySelectContainerProps {
  mode: 'create' | 'edit' | 'view';
  primaryValue: string;
  secondaryValue?: string;
  placeholder?: string;
  onSelect: () => void;
  onClear: () => void;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  customIcon?: React.ReactNode;
}

const EntitySelectContainer: React.FC<EntitySelectContainerProps> = ({
  mode,
  primaryValue,
  secondaryValue,
  placeholder = 'Выберите значение',
  onSelect,
  onClear,
  disabled = false,
  hasError = false,
  errorMessage = '',
  customIcon,
}) => {
  const defaultIcon = (
    <svg width="27" height="6" viewBox="0 0 27 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z" fill="#50555C" />
    </svg>
  );

  const icon = customIcon || defaultIcon;

  if (mode === 'view') {
    return (
      <ViewContainer>
        <PrimaryText>{primaryValue || 'Не указано'}</PrimaryText>
        {secondaryValue && <SecondaryText>{secondaryValue}</SecondaryText>}
      </ViewContainer>
    );
  }

  return (
    <Container>
      <Wrapper>
        <StyledInput type="text" value={primaryValue || ''} placeholder={placeholder} readOnly disabled={disabled} />
        {primaryValue && !disabled && (
          <ClearButton type="button" onClick={onClear} aria-label="Очистить">
            ×
          </ClearButton>
        )}
      </Wrapper>

      {!disabled && (
        <SelectButton type="button" onClick={onSelect} aria-label="Выбрать">
          {icon}
        </SelectButton>
      )}
      {hasError && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
  color: #333;
  pointer-events: none;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const PrimaryText = styled.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const SecondaryText = styled.span`
  font-size: 13px;
  color: #666;
`;

const SelectButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #999;
  font-size: 30px;

  &:hover {
    color: #666;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export default EntitySelectContainer;
