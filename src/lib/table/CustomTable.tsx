import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ContextMenu, { type ContextMenuItem } from '../menu/ContextMenu';

type Alignment = 'left' | 'center' | 'right';

export interface Column {
  name: string;
  isSortable?: boolean;
  align?: Alignment;
  isHidden?: boolean;
}

export interface TableAction {
  label: string;
  action: (rowData: any[], rowIndex: number) => void;
  color?: string;
  disabled?: boolean;
  shouldShow?: (rowData: any[]) => boolean;
  getSubmenu?: (rowData: any[]) => ContextMenuItem[];
  showOnHover?: boolean;
}

export interface RowStyle {
  backgroundColor?: string;
  color?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number | 'initial' | 'inherit';
  hoverBackgroundColor?: string;
}

export interface CreditsTableProps {
  columns: Column[];
  data: any[][];
  onRowDoubleClick?: (rowData: any[], rowIndex: number) => void;
  contextMenuActions?: TableAction[] | ((rowData: any[]) => TableAction[]);
  onSort?: (columnIndex: number) => void;
  onRowClick?: (rowData: any[], rowIndex: number) => void;
  sortConfig?: {
    key: number | null;
    direction: 'asc' | 'desc';
  };
  selectedRow?: number;
  fixedHeight?: string;
  hasTotalsRow?: boolean;
  debtChecker?: (rowData: any[]) => boolean;
  rowStyles?: { [rowIndex: number]: RowStyle };
  isLoading?: boolean;
}

const CustomTable: React.FC<CreditsTableProps> = ({
  columns,
  data,
  onRowDoubleClick,
  contextMenuActions = [],
  onSort,
  sortConfig,
  onRowClick,
  selectedRow: externalSelectedRow,
  fixedHeight,
  hasTotalsRow,
  debtChecker,
  rowStyles = {},
  isLoading,
}) => {
  const [internalSelectedRow, setInternalSelectedRow] = useState<number | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; rowIndex: number | null } | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const longPressTimer = useRef<number | null>(null);
  const LONG_PRESS_DURATION = 500;

  const selectedRow = externalSelectedRow !== undefined ? externalSelectedRow : internalSelectedRow;

  const handleSort = (columnIndex: number) => {
    if (!columns[columnIndex].isSortable || !onSort) return;
    onSort(columnIndex);
  };

  const defaultDebtChecker = (row: any[]) => {
    const debtCell = row[8];
    if (typeof debtCell === 'string') {
      const debtValue = parseFloat(debtCell.replace(/[^\d.]/g, ''));
      return debtValue > 0;
    }
    return false;
  };

  const checkDebt = debtChecker || defaultDebtChecker;

  const handleRowClick = (rowIndex: number) => {
    const newSelectedRow = rowIndex === selectedRow ? null : rowIndex;
    if (externalSelectedRow === undefined) {
      setInternalSelectedRow(newSelectedRow);
    }
    if (onRowClick) {
      onRowClick(data[rowIndex], rowIndex);
    }
  };

  const handleRowDoubleClick = (row: any[], rowIndex: number) => {
    if (onRowDoubleClick) {
      onRowDoubleClick(row, rowIndex);
    }
  };

  const showContextMenu = (event: React.MouseEvent | React.TouchEvent, rowIndex: number) => {
    if (contextMenuActions.length === 0) return;

    event.preventDefault();

    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    setContextMenu({
      x: clientX,
      y: clientY,
      rowIndex,
    });
  };

  const handleContextMenu = (event: React.MouseEvent, rowIndex: number) => {
    event.preventDefault();
    showContextMenu(event, rowIndex);
  };

  const handleTouchStart = (event: React.TouchEvent, rowIndex: number) => {
    if (contextMenuActions.length === 0) return;

    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }

    longPressTimer.current = window.setTimeout(() => {
      showContextMenu(event, rowIndex);
    }, LONG_PRESS_DURATION);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const handleTouchMove = () => {
    if (longPressTimer.current) {
      window.clearTimeout(longPressTimer.current);
    }
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (contextMenu) closeContextMenu();
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, [contextMenu]);

  const getRowStyle = (rowIndex: number, isTotalsRow: boolean, isDebtRow: boolean): RowStyle => {
    if (isTotalsRow) {
      return { backgroundColor: '#FFFFFF', color: '#000000', fontWeight: 'bold' };
    }

    const customStyle = rowStyles[rowIndex] || {};

    if (rowIndex === selectedRow) {
      return {
        backgroundColor: customStyle.backgroundColor || '#007D88',
        color: customStyle.color || '#FFFFFF',
        fontWeight: customStyle.fontWeight || 'normal',
      };
    }

    if (isDebtRow) {
      return {
        backgroundColor: customStyle.backgroundColor || '#E8D8D8',
        color: customStyle.color || 'inherit',
        fontWeight: customStyle.fontWeight || 'normal',
      };
    }

    const isActive = data[rowIndex][data[rowIndex].length - 1] === false;
    if (isActive) {
      return {
        backgroundColor: customStyle.backgroundColor || '#E8F5E8',
        color: '#1B5E20',
        fontWeight: customStyle.fontWeight || 'normal',
      };
    }

    return {
      backgroundColor: customStyle.backgroundColor || '#FFFFFF',
      color: customStyle.color || 'inherit',
      fontWeight: customStyle.fontWeight || 'normal',
    };
  };

  const getHoverBackgroundColor = (rowIndex: number, isTotalsRow: boolean, isDebtRow: boolean): string => {
    if (isTotalsRow) return '#FFFFFF';

    const rowStyle = getRowStyle(rowIndex, isTotalsRow, isDebtRow);
    if (rowStyle.hoverBackgroundColor) return rowStyle.hoverBackgroundColor;

    if (rowIndex === selectedRow) return '#007D88';
    if (isDebtRow) return '#E8D8D8CC';
    if (data[rowIndex][data[rowIndex].length - 1] === false) return '#51D5B4CC';

    return '#F3F4F6';
  };

  const renderContextMenu = () => {
    if (!contextMenu || contextMenuActions.length === 0) return null;

    const filteredActions = (typeof contextMenuActions === 'function'
      ? contextMenuActions(data[contextMenu.rowIndex!])
      : contextMenuActions
    ).filter(
      (action) =>
        typeof action === 'object' &&
        (typeof action.shouldShow !== 'function' || action.shouldShow(data[contextMenu.rowIndex!])),
    );

    if (filteredActions.length === 0) return null;

    return (
      <ContextMenuWrapper
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        style={{
          position: 'fixed',
          left: contextMenu.x,
          top: contextMenu.y,
          zIndex: 1000,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <ContextMenu
          items={filteredActions.map((action) => {
            const menuItem: ContextMenuItem = {
              label: action.label,
              color: action.color,
              disabled: action.disabled,
            };

            if (action.getSubmenu) {
              menuItem.submenu = action.getSubmenu(data[contextMenu.rowIndex!]);
            } else if (action.action) {
              menuItem.action = () => {
                action.action(data[contextMenu.rowIndex!], contextMenu.rowIndex!);
                closeContextMenu();
              };
            }

            return menuItem;
          })}
          onClose={closeContextMenu}
          x={0}
          y={0}
        />
      </ContextMenuWrapper>
    );
  };

  return (
    <TableContainer ref={tableRef}>
      {isLoading ? (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      ) : (
        <>
          <StyledTable>
            <TableHeader>
              <TableRow>
                {columns.map(
                  (column, index) =>
                    !column.isHidden && (
                      <HeaderCell
                        key={index}
                        $isSortable={column.isSortable}
                        $isActive={sortConfig?.key === index}
                        onClick={() => handleSort(index)}
                        $align={column.align || 'center'}
                        $isFirst={index === 0}
                        $isLast={index === columns.length - 1}
                      >
                        <HeaderContent $align={column.align || 'center'}>
                          {column.name}
                          {column.isSortable && (
                            <SortIcon
                              $direction={sortConfig?.key === index ? sortConfig.direction : 'asc'}
                              animate={{
                                rotate: sortConfig?.key === index && sortConfig.direction === 'desc' ? 180 : 0,
                                color: sortConfig?.key === index ? '#007D88' : '#6B7280',
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </SortIcon>
                          )}
                        </HeaderContent>
                      </HeaderCell>
                    ),
                )}
              </TableRow>
            </TableHeader>
            <TableBody $fixedHeight={fixedHeight}>
              <AnimatePresence>
                {data.map((row, rowIndex) => {
                  const isTotalsRow = hasTotalsRow && rowIndex === data.length - 1;
                  const isDebtRow = !isTotalsRow && checkDebt(row);
                  const rowStyle = getRowStyle(rowIndex, isTotalsRow, isDebtRow);
                  const hoverBackgroundColor = getHoverBackgroundColor(rowIndex, isTotalsRow, isDebtRow);

                  return (
                    <TableRow
                      key={`row-${rowIndex}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        backgroundColor: rowStyle.backgroundColor || '#FFFFFF',
                        color: rowStyle.color || 'inherit',
                        fontWeight: rowStyle.fontWeight || 'normal',
                      }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      $isLast={rowIndex === data.length - 1}
                      $isSelected={rowIndex === selectedRow}
                      $isTotalsRow={isTotalsRow}
                      onClick={() => !isTotalsRow && handleRowClick(rowIndex)}
                      onDoubleClick={() => !isTotalsRow && handleRowDoubleClick(row, rowIndex)}
                      onContextMenu={(event) => !isTotalsRow && handleContextMenu(event, rowIndex)}
                      onTouchStart={(event) => !isTotalsRow && handleTouchStart(event, rowIndex)}
                      onTouchEnd={handleTouchEnd}
                      onTouchMove={handleTouchMove}
                      whileHover={
                        !isTotalsRow
                          ? {
                              backgroundColor: hoverBackgroundColor,
                              transition: { duration: 0.15 },
                            }
                          : {}
                      }
                      style={{
                        backgroundColor: rowStyle.backgroundColor || '#FFFFFF',
                        color: rowStyle.color || 'inherit',
                        fontWeight: rowStyle.fontWeight || 'normal',
                      }}
                    >
                      {row.map(
                        (cell, cellIndex) =>
                          !columns[cellIndex]?.isHidden && (
                            <BodyCell
                              key={cellIndex}
                              $align={columns[cellIndex]?.align || 'center'}
                              $isFirst={cellIndex === 0}
                              $isLast={cellIndex === row.length - 1}
                              $isTotalsCell={isTotalsRow}
                              $isBeforeTotals={isTotalsRow && cellIndex < row.findIndex((c) => c === 'Итого:')}
                            >
                              {cell}
                            </BodyCell>
                          ),
                      )}
                    </TableRow>
                  );
                })}
              </AnimatePresence>
            </TableBody>
          </StyledTable>

          <AnimatePresence>{renderContextMenu()}</AnimatePresence>
        </>
      )}
    </TableContainer>
  );
};

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007d88;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const TableContainer = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-sizing: border-box;

  th,
  td {
    box-sizing: border-box;
    position: relative;
    border-right: 0.5px solid #d1d5db;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`;

const ContextMenuWrapper = styled(motion.div)`
  z-index: 1000;
  pointer-events: auto;
`;

const TableHeader = styled.thead`
  text-align: center;
  position: relative;
`;

const TableBody = styled.tbody<{ $fixedHeight?: string }>`
  ${({ $fixedHeight }) =>
    $fixedHeight &&
    `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`;

const TableRow = styled(motion.tr)<{ $isLast?: boolean; $isSelected?: boolean; $isTotalsRow?: boolean }>`
  position: relative;
  cursor: ${({ $isTotalsRow }) => ($isTotalsRow ? 'default' : 'pointer')};
  font-weight: ${({ $isTotalsRow }) => ($isTotalsRow ? 'bold' : 'normal')};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1%;
    width: 98%;
    height: 1px;
    background: #d1d5db;
    display: ${({ $isLast, $isTotalsRow }) => ($isLast || $isTotalsRow ? 'none' : 'block')};
  }
`;

const HeaderCell = styled.th<{
  $isSortable?: boolean;
  $isActive?: boolean;
  $align?: Alignment;
  $isFirst?: boolean;
  $isLast?: boolean;
}>`
  padding: 16px;
  padding-left: ${({ $isFirst }) => ($isFirst ? '50px' : '16px')};
  padding-right: ${({ $isLast }) => ($isLast ? '50px' : '16px')};
  text-align: ${({ $align }) => $align};
  font-weight: 500;
  position: relative;
  cursor: ${({ $isSortable }) => ($isSortable ? 'pointer' : 'default')};
  transition: all 0.2s ease;
  background-color: #ffffff;
  color: ${({ $isActive }) => ($isActive ? '#007d88' : 'inherit')};

  &:hover {
    background-color: ${({ $isSortable }) => ($isSortable ? '#f3f4f6' : 'inherit')};
  }
`;

const HeaderContent = styled.div<{ $align?: Alignment }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align }) => ($align === 'right' ? 'flex-end' : $align === 'center' ? 'center' : 'flex-start')};
  width: 100%;
`;

const SortIcon = styled(motion.span)<{ $direction: 'asc' | 'desc' }>`
  display: inline-flex;
  align-items: center;
`;

const BodyCell = styled.td<{
  $align?: Alignment;
  $isFirst?: boolean;
  $isLast?: boolean;
  $isTotalsCell?: boolean;
  $isBeforeTotals?: boolean;
}>`
  padding: 16px;
  padding-left: ${({ $isFirst }) => ($isFirst ? '50px' : '16px')};
  padding-right: ${({ $isLast }) => ($isLast ? '50px' : '16px')};
  text-align: ${({ $align }) => $align};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals, $isTotalsCell }) => ($isBeforeTotals || $isTotalsCell ? 'none' : '0.5px solid #d1d5db')};
`;

export default CustomTable;
