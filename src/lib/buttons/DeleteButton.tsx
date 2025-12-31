import React from 'react';
import styled from 'styled-components';

interface DeleteButtonProps {
  onClick: (e: React.MouseEvent) => void;
  tooltip?: string;
  size?: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, tooltip, size = 32 }) => {
  return (
    <DeleteButtonContainer onClick={onClick} size={size} title={tooltip}>
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z"
          fill="#50555C"
        />
      </svg>
    </DeleteButtonContainer>
  );
};

const DeleteButtonContainer = styled.button<{ size: number }>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    outline: none;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export default DeleteButton;
