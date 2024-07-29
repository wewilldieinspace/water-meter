import React, { FC } from 'react';
import { TableCellProps } from './TableCell.types';
import { Cell } from './TableCell.styles';

export const TableCell: FC<TableCellProps> = ({ children, ...props }) => {
  return <Cell {...props}>{children}</Cell>;
};
