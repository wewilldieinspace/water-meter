import React, { FC, useMemo } from 'react';
import { PaginationProps } from './Pagination.types';
import { PageButton } from '@/components';
import { PaginationContainer } from './Pagination.styles';

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}) => {
  const getPageNumbers = useMemo(() => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  const handleClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      {getPageNumbers.map((page, index) =>
        typeof page === 'number' ? (
          <PageButton
            key={index}
            active={page === currentPage}
            onClick={() => handleClick(page)}
            disabled={isLoading}
          >
            {page}
          </PageButton>
        ) : (
          <PageButton key={index} active={false}>
            ...
          </PageButton>
        )
      )}
    </PaginationContainer>
  );
};
