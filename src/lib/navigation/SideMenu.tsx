import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { SideMenuContext } from "../context/SideMenuContext";

export interface SideMenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: SideMenuItem[];
  onClick?: (item: SideMenuItem) => void;
  hidden?: boolean;
  disabled?: boolean;
}

export interface SideMenuProps {
  items: SideMenuItem[];
  bottomItems?: SideMenuItem[];
  logo?: React.ReactNode;
  arrowIcon?: React.ReactNode;
  collapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  selectedKey?: string | null;
  onSelect?: (item: SideMenuItem) => void;
  autoCollapseOnSelect?: boolean;
  width?: string;
  collapsedWidth?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Мобильный брейкпоинт */
  mobileBreakpoint?: number;
  /** Показывать ли лейблы в Bottom Navigation */
  showBottomLabels?: boolean;
  /** Дочерние элементы (контент страницы) */
  children?: React.ReactNode;
}

// Дефолтная SVG иконка
const DefaultArrowIcon = ({ collapsed }: { collapsed: boolean }) => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: `rotate(${collapsed ? '180deg' : '0deg'})`,
      transition: 'transform 0.3s ease',
    }}
  >
    <path
      d="M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z"
      fill="#50555C"
      stroke="#50555C"
    />
  </svg>
);

const SideMenu: React.FC<SideMenuProps> = ({
  items,
  bottomItems = [],
  logo,
  arrowIcon,
  collapsed: collapsedProp,
  onToggle,
  selectedKey: selectedKeyProp,
  onSelect,
  autoCollapseOnSelect = false,
  width = "315px",
  collapsedWidth = "85px",
  className,
  style,
  mobileBreakpoint = 768,
  showBottomLabels = true,
  children,
}) => {
  const contextValue = useContext(SideMenuContext);

  // Определяем, мобильное ли устройство
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileBreakpoint]);

  const [internalCollapsed, setInternalCollapsed] = useState(
    collapsedProp ?? contextValue.collapsed ?? false
  );
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const [internalSelectedKey, setInternalSelectedKey] = useState<string | null>(
    selectedKeyProp ?? contextValue.selectedSideMenuItem ?? null
  );
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    items: SideMenuItem[];
  }>({
    visible: false,
    x: 0,
    y: 0,
    items: [],
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const collapsed =
    collapsedProp ?? contextValue.collapsed ?? internalCollapsed;
  const setCollapsedState = (next: boolean) => {
    setInternalCollapsed(next);
    contextValue.toggleCollapsed();
    onToggle?.(next);
  };

  const selectedKey =
    selectedKeyProp ?? contextValue.selectedSideMenuItem ?? internalSelectedKey;
  const setSelectedKeyState = (key: string | null) => {
    setInternalSelectedKey(key);
    contextValue.setSelectedSideMenuItem(key);
  };

  useEffect(() => {
    if (collapsedProp !== undefined) {
      setInternalCollapsed(collapsedProp);
      if (collapsedProp) setExpandedKey(null);
    }
  }, [collapsedProp]);

  useEffect(() => {
    if (selectedKeyProp !== undefined) {
      setSelectedKeyState(selectedKeyProp);
    }
  }, [selectedKeyProp]);

  useEffect(() => {
    const close = () => setContextMenu((prev) => ({ ...prev, visible: false }));
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const handleToggle = () => {
    const next = !collapsed;
    setCollapsedState(next);
    if (next) setExpandedKey(null);
  };

  const handleItemSelect = (item: SideMenuItem) => {
    if (item.disabled || item.hidden) return;
    setSelectedKeyState(item.key);
    onSelect?.(item);
    item.onClick?.(item);
    if (autoCollapseOnSelect) {
      setCollapsedState(true);
      setExpandedKey(null);
    }
  };

  const toggleExpand = (key: string) => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  const handleMainClick = (item: SideMenuItem, event: React.MouseEvent) => {
    const hasChildren = (item.children?.length || 0) > 0;
    if (collapsed && hasChildren) {
      event.stopPropagation();
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      setContextMenu({
        visible: true,
        x: rect.right + 6,
        y: rect.top,
        items: item.children || [],
      });
      return;
    }
    if (hasChildren) {
      toggleExpand(item.key);
    } else {
      handleItemSelect(item);
    }
  };

  const renderItems = (menuItems: SideMenuItem[], _isSub = false) =>
    menuItems
      .filter((i) => !i.hidden)
      .map((item) => {
        const hasChildren = (item.children?.length || 0) > 0;
        const isExpanded = expandedKey === item.key;
        const isSelected =
          selectedKey === item.key ||
          (!!item.children && item.children.some((c) => c.key === selectedKey));
        return (
          <React.Fragment key={item.key}>
            <MenuItem
              $collapsed={collapsed}
              $selected={isSelected}
              onClick={(e) => handleMainClick(item, e)}
              $disabled={item.disabled}
              title={item.label}
            >
              {item.icon && (
                <IconWrapper $collapsed={collapsed}>{item.icon}</IconWrapper>
              )}
              {!collapsed && <MenuItemText>{item.label}</MenuItemText>}
              {!collapsed && hasChildren && (
                <ExpandArrow $expanded={isExpanded}>▾</ExpandArrow>
              )}
            </MenuItem>
            {!collapsed && hasChildren && isExpanded && (
              <SubMenu>{renderItems(item.children || [], true)}</SubMenu>
            )}
          </React.Fragment>
        );
      });

  const contextMenuContent = useMemo(() => {
    if (!contextMenu.visible) return null;
    return (
      <ContextMenu style={{ left: contextMenu.x, top: contextMenu.y }}>
        {contextMenu.items.map((item) => (
          <ContextMenuItem
            key={item.key}
            onClick={() => {
              handleItemSelect(item);
              setContextMenu({ visible: false, x: 0, y: 0, items: [] });
            }}
            $selected={selectedKey === item.key}
          >
            {item.label}
          </ContextMenuItem>
        ))}
      </ContextMenu>
    );
  }, [contextMenu, selectedKey]);

  // Рендер Bottom Navigation для мобильных устройств
  const renderBottomNavigation = () => {
    const allItems = [...items, ...bottomItems].filter(i => !i.hidden);
    
    return (
      <BottomNavContainer>
        {allItems.map((item) => {
          const isSelected = selectedKey === item.key;
          return (
            <BottomNavItem
              key={item.key}
              $selected={isSelected}
              onClick={() => handleItemSelect(item)}
              $disabled={item.disabled}
            >
              {item.icon && <BottomNavIcon $selected={isSelected}>{item.icon}</BottomNavIcon>}
              {showBottomLabels && <BottomNavLabel $selected={isSelected}>{item.label}</BottomNavLabel>}
            </BottomNavItem>
          );
        })}
      </BottomNavContainer>
    );
  };

  // Если мобильное устройство - показываем Bottom Navigation с контентом
  if (isMobile) {
    return (
      <MobileContainer className={className} style={style}>
        {/* Основной контент (children) */}
        <MobileContent>
          {children}
        </MobileContent>
        
        {/* Bottom Navigation */}
        {renderBottomNavigation()}
      </MobileContainer>
    );
  }

  // Десктопная версия
  return (
    <SideMenuContainer
      ref={containerRef}
      $collapsed={collapsed}
      $width={width}
      $collapsedWidth={collapsedWidth}
      className={className}
      style={style}
    >
      <TopSection>
        <ArrowButton onClick={handleToggle} aria-label="Переключить меню">
          {arrowIcon ?? <DefaultArrowIcon collapsed={collapsed} />}
        </ArrowButton>
        {!collapsed && logo && (
          <LogoWrapper>
            {logo}
          </LogoWrapper>
        )}
      </TopSection>

      <MenuList>
        <ScrollableArea>{renderItems(items)}</ScrollableArea>
        {bottomItems.length > 0 && (
          <>
            <Divider />
            <ScrollableArea>{renderItems(bottomItems)}</ScrollableArea>
          </>
        )}
      </MenuList>

      {contextMenuContent}
      <RightBorder $collapsed={collapsed} />
      
      {/* Добавляем children для десктопной версии (если нужно) */}
      {children}
    </SideMenuContainer>
  );
};

export default SideMenu;


const MobileContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 250, 250, 1);
  position: relative;
`;

const MobileContent = styled.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`;

const BottomNavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgba(209, 213, 219, 1);
  padding: 8px 4px;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const BottomNavItem = styled.div<{ $selected?: boolean; $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  color: ${({ $selected }) => ($selected ? "#000" : "#50555c")};
  background-color: ${({ $selected }) =>
    $selected ? "rgba(209, 213, 219, 0.3)" : "transparent"};
  transition: all 0.2s ease;
  flex: 1;
  max-width: 80px;

  &:active {
    background-color: rgba(209, 213, 219, 0.5);
  }
`;

const BottomNavIcon = styled.div<{ $selected?: boolean }>`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $selected }) => ($selected ? "#000" : "#50555c")};
`;

const BottomNavLabel = styled.span<{ $selected?: boolean }>`
  font-size: 12px;
  font-weight: ${({ $selected }) => ($selected ? "600" : "400")};
  color: ${({ $selected }) => ($selected ? "#000" : "#50555c")};
  text-align: center;
  white-space: nowrap;
`;

const SideMenuContainer = styled.div<{
  $collapsed: boolean;
  $width: string;
  $collapsedWidth: string;
}>`
  width: ${({ $collapsed, $width, $collapsedWidth }) =>
    $collapsed ? $collapsedWidth : $width};
  height: 100vh;
  background-color: rgba(249, 250, 250, 1);
  color: rgba(80, 85, 92, 1);
  position: relative;
  padding: 22px 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`;

const ScrollableArea = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;

const MenuItem = styled.div<{
  $collapsed: boolean;
  $selected?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? "center" : "flex-start")};
  gap: ${({ $collapsed }) => ($collapsed ? "0" : "12px")};
  padding: ${({ $collapsed }) => ($collapsed ? "0" : "10px 17px")};
  margin: 4px 0;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  color: ${({ $selected }) => ($selected ? "#000" : "#50555c")};
  background-color: ${({ $selected }) =>
    $selected ? "rgba(209, 213, 219, 1)" : "transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  
  /* В свернутом состоянии делаем иконку квадратной с отступами */
  ${({ $collapsed }) => $collapsed && `
    width: 48px;
    height: 48px;
    margin: 4px auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    background-color: ${({ $selected }) =>
      $selected ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`;

const MenuItemText = styled.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`;

const IconWrapper = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $collapsed }) => $collapsed ? `
    width: 48px;
    height: 48px;
  ` : `
    min-width: 21px;
    width: 21px;
    height: auto;
  `}
  
  & > svg {
    ${({ $collapsed }) => $collapsed ? `
      width: 24px;
      height: 24px;
    ` : `
      width: 100%;
      height: auto;
    `}
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const SubMenu = styled.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ExpandArrow = styled.span<{ $expanded: boolean }>`
  margin-left: auto;
  transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`;

const ContextMenu = styled.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`;

const ContextMenuItem = styled.div<{ $selected?: boolean }>`
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ $selected }) => ($selected ? "#000" : "#50555c")};
  background-color: ${({ $selected }) =>
    $selected ? "rgba(209, 213, 219, 1)" : "transparent"};

  &:hover {
    background-color: ${({ $selected }) =>
      $selected ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`;

const RightBorder = styled.div<{ $collapsed: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
`;
