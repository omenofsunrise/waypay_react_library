import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';

interface PaginationProps {
  total: number;
  current?: number;
  onChange?: (page: number) => void;
  itemsPerPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, current = 1, onChange, itemsPerPage = 10 }) => {
  const totalPages = Math.ceil(total / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(current);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    onChange?.(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      const half = Math.floor(maxVisiblePages / 2);
      startPage = Math.max(currentPage - half, 1);
      endPage = Math.min(currentPage + half, totalPages);

      if (currentPage <= half + 1) {
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - half) {
        startPage = totalPages - maxVisiblePages + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageNumber key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </PageNumber>,
      );
    }

    if (startPage > 1) {
      if (startPage > 2) {
        pages.unshift(<PageNumber key="start-ellipsis">...</PageNumber>);
      }
      pages.unshift(
        <PageNumber key={1} active={1 === currentPage} onClick={() => handlePageChange(1)}>
          1
        </PageNumber>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<PageNumber key="end-ellipsis">...</PageNumber>);
      }
      pages.push(
        <PageNumber key={totalPages} active={totalPages === currentPage} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </PageNumber>,
      );
    }

    return pages;
  };

  return (
    <StyledPagination>
      <ArrowButton disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path d="M6 0.5L1 5.5L6 10.5" stroke={currentPage === 1 ? '#ccc' : 'black'} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ArrowButton>

      {renderPageNumbers()}

      <ArrowButton disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} style={{ transform: 'rotate(180deg)' }}>
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path d="M6 0.5L1 5.5L6 10.5" stroke={currentPage === totalPages ? '#ccc' : 'black'} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ArrowButton>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`;

const PageNumber = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ active }) => (active ? 'white' : 'black')};
  background-color: ${({ active }) => (active ? 'rgba(0, 125, 136, 1)' : 'transparent')};

  &:hover {
    color: ${({ active }) => (active ? 'white' : 'rgba(0, 125, 136, 1)')};
  }
`;

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background-color: rgba(0, 125, 136, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Pagination;
