import React from 'react';
import styled from 'styled-components';

interface BackButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BackButton = styled.button<BackButtonProps>`
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  margin: 25px;

  &:hover {
    opacity: 0.8;
  }
`;

const BackButtonComponent: React.FC<BackButtonProps> = ({ children, onClick }) => {
  return (
    <BackButton onClick={onClick}>
      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z"
          fill="#50555C"
        />
      </svg>
      {children}
    </BackButton>
  );
};

export default BackButtonComponent;
