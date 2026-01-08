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
}

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
  collapsedWidth = "70px",
  className,
  style,
}) => {
  const contextValue = useContext(SideMenuContext);

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
          {arrowIcon ?? <ArrowIcon $collapsed={collapsed}>❮</ArrowIcon>}
        </ArrowButton>
        {!collapsed && logo && <LogoWrapper>{logo}</LogoWrapper>}
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
    </SideMenuContainer>
  );
};

export default SideMenu;

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
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`;

const ArrowIcon = styled.span<{ $collapsed: boolean }>`
  display: inline-block;
  transform: rotate(${({ $collapsed }) => ($collapsed ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
  font-size: 18px;
`;

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  gap: ${({ $collapsed }) => ($collapsed ? "0" : "12px")};
  padding: ${({ $collapsed }) => ($collapsed ? "15px 0" : "15px 17px")};
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-чed" : "pointer")};
  color: ${({ $selected }) => ($selected ? "#000" : "#50555c")};
  background-color: ${({ $selected }) =>
    $selected ? "rgba(209, 213, 219, 1)" : "transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

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
  min-width: 21px;
  width: ${({ $collapsed }) => ($collapsed ? "24px" : "21px")};
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
