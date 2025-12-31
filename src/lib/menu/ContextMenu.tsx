import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ContextMenuItem {
  label: string | React.ReactNode;
  action?: () => void;
  color?: string;
  submenu?: ContextMenuItem[];
  disabled?: boolean;
}

export interface ContextMenuProps extends HTMLMotionProps<'div'> {
  x: number;
  y: number;
  items: ContextMenuItem[];
  onClose: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, items, onClose, ...props }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const getAdjustedPosition = () => {
    if (!menuRef.current) return { x, y };

    const menuWidth = menuRef.current.offsetWidth;
    const menuHeight = menuRef.current.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let adjustedX = x;
    let adjustedY = y;

    if (adjustedX + menuWidth > windowWidth) {
      adjustedX = x - menuWidth;
    }

    if (adjustedY + menuHeight > windowHeight) {
      adjustedY = y - menuHeight;
    }

    return { x: adjustedX, y: adjustedY };
  };

  const position = getAdjustedPosition();

  const handleItemClick = (item: ContextMenuItem, index: number) => {
    if (item.submenu) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    } else if (item.action) {
      item.action();
      onClose();
    }
  };

  const handleMouseEnter = (index: number) => {
    if (items[index].submenu) {
      setActiveSubmenu(index);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (!menuRef.current?.contains(nextTarget)) {
      setActiveSubmenu(null);
    }
  };

  return (
    <ContextMenuContainer
      ref={menuRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.15 }}
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
      }}
      onClick={(event) => event.stopPropagation()}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {items.map((item, index) => (
        <ContextMenuItemWrapper key={index} $hasSubmenu={!!item.submenu} $disabled={item.disabled}>
          <ContextMenuItemStyled
            onClick={(event) => {
              event.stopPropagation();
              if (!item.disabled) {
                handleItemClick(item, index);
              }
            }}
            onMouseEnter={() => !item.disabled && handleMouseEnter(index)}
            whileHover={!item.disabled ? { backgroundColor: '#f3f4f6' } : {}}
            initial={{ backgroundColor: '#ffffff' }}
            $color={item.color}
            $disabled={item.disabled}
          >
            <MenuItemContent>
              {item.label}
              {item.submenu && (
                <SubmenuArrow>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </SubmenuArrow>
              )}
            </MenuItemContent>
          </ContextMenuItemStyled>

          {item.submenu && activeSubmenu === index && (
            <SubmenuContainer
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
            >
              <ContextMenu x={0} y={-index * 40} items={item.submenu} onClose={() => setActiveSubmenu(null)} />
            </SubmenuContainer>
          )}
        </ContextMenuItemWrapper>
      ))}
    </ContextMenuContainer>
  );
};

const ContextMenuContainer = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`;

const ContextMenuItemWrapper = styled.div<{ $hasSubmenu?: boolean; $disabled?: boolean }>`
  position: relative;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const ContextMenuItemStyled = styled(motion.div)<{ $color?: string; $disabled?: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ $color, $disabled }) => ($disabled ? '#999' : $color || '#333')};
  white-space: nowrap;
  position: relative;
`;

const MenuItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SubmenuArrow = styled.span`
  color: #666;
  margin-left: 8px;
`;

const SubmenuContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`;

export default ContextMenu;
