import React, { FC, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { Table, Pagination } from '@/components';
import { store } from '@/store';
import { TABLE_ITEMS_LIMIT } from '@/constants';
import { Body } from './HomePage.styles';

export const HomePage: FC = observer(() => {
  const { fetchMeters, setPage, currentPage, totalPages, meters, isLoading } =
    store;

  useEffect(() => {
    fetchMeters(currentPage);
  }, [currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
    fetchMeters(page);
  }, []);

  const initialIndex = (currentPage - 1) * TABLE_ITEMS_LIMIT + 1;

  return (
    <>
      <Body>
        <Table data={meters} initialIndex={initialIndex} />
      </Body>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isLoading={isLoading}
      />
    </>
  );
});
