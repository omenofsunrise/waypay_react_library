import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  percentage: number;
  onChange?: (percentage: number) => void;
  draggable?: boolean;
  colors?: {
    primary: string;
    secondary: string;
  };
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  onChange,
  draggable = false,
  colors = {
    primary: 'rgba(0, 125, 136, 1)',
    secondary: 'rgba(37, 203, 161, 1)',
  },
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!draggable || !onChange) return;
    event.preventDefault();
    setIsDragging(true);
    updatePercentage(event);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging || !onChange) return;
    updatePercentage(event);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updatePercentage = (event: MouseEvent | React.MouseEvent) => {
    if (!barRef.current || !onChange) return;

    const rect = barRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    let newPercentage = (x / rect.width) * 100;

    newPercentage = Math.max(0, Math.min(100, newPercentage));

    onChange(Math.round(newPercentage));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <ProgressBarContainer ref={barRef} $draggable={draggable} onMouseDown={handleMouseDown}>
      <ProgressBackground $secondaryColor={colors.secondary} />
      <ProgressFill $percentage={percentage} $primaryColor={colors.primary} />
      {draggable && <ProgressHandle $percentage={percentage} $primaryColor={colors.primary} />}
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div<{ $draggable: boolean }>`
  width: 100%;
  height: 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  cursor: ${(props) => (props.$draggable ? 'pointer' : 'default')};

  &:hover {
    cursor: ${(props) => (props.$draggable ? 'pointer' : 'default')};
  }
`;

const ProgressBackground = styled.div<{ $secondaryColor: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.$secondaryColor};
  border-radius: 5px;
`;

const ProgressFill = styled.div<{
  $percentage: number;
  $primaryColor: string;
}>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background: ${(props) => props.$primaryColor};
  border-radius: ${(props) => (props.$percentage === 100 ? '5px' : '5px 0 0 5px')};
  transition: width 0.1s ease;
  z-index: 1;
`;

const ProgressHandle = styled.div<{
  $percentage: number;
  $primaryColor: string;
}>`
  position: absolute;
  left: ${(props) => props.$percentage}%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: ${(props) => props.$primaryColor};
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: left 0.1s ease;

  &:active {
    cursor: grabbing;
  }
`;
