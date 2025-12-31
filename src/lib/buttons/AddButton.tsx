import React from 'react';
import styled from 'styled-components';

interface AddButtonProps {
  onClick: (e: React.MouseEvent) => void;
  tooltip?: string;
  size?: number;
  margin?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, tooltip, size = 32, margin }) => {
  return (
    <AddButtonContainer onClick={onClick} size={size} margin={margin} title={tooltip}>
      <PlusIcon size={size} />
    </AddButtonContainer>
  );
};

const AddButtonContainer = styled.button<{ size: number; margin?: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  ${(props) => props.margin && `margin: ${props.margin};`}

  &:hover {
    background-color: rgba(249, 250, 250, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const PlusIcon = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size * 0.5}px;
  height: ${(props) => props.size * 0.5}px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #50555c;
    border-radius: 2px;
  }

  &::before {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    width: 2px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`;

export default AddButton;
