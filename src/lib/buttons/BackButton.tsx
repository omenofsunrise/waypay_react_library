import React from 'react';
import styled from 'styled-components';

type BackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const BackButton = styled.button<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: rgba(0, 125, 136, 1);
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: white;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'rgba(0, 125, 136, 1)' : 'rgba(0, 150, 163, 1)'};
  }
`;

const BackButtonComponent: React.FC<BackButtonProps> = ({ children, onClick, disabled, ...rest }) => {
  return (
    <BackButton onClick={onClick} disabled={disabled} {...rest}>
      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z"
          fill="currentColor"
        />
      </svg>
      {children}
    </BackButton>
  );
};

export default BackButtonComponent;
