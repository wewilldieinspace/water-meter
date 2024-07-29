import React, { FC, useState } from 'react';
import { TableCell, DeleteButton } from '@/components';
import { TableRowProps } from './TableRow.types';
import { store } from '@/store';
import WaterIcon from '@/assets/water.svg';
import { meterTypes } from '@/constants';
import { MeterTypeKey } from '@/types';
import { Row } from './TableRow.styles';

export const TableRow: FC<TableRowProps> = ({ index, data, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await store.deleteMeter(data.id);
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Row {...props}>
      <TableCell>{index}</TableCell>
      <TableCell>
        <WaterIcon
          style={{ marginRight: '8px' }}
          fill={meterTypes[data.type as MeterTypeKey].color}
        />
        {meterTypes[data.type as MeterTypeKey].value}
      </TableCell>
      <TableCell className={'hide-on-mobile'}>
        {new Date(data.installationDate).toLocaleDateString()}
      </TableCell>
      <TableCell className={'hide-on-mobile'}>
        {data.isAutomatic ? 'да' : 'нет'}
      </TableCell>
      <TableCell>{data.initialValues}</TableCell>
      <TableCell>{store.getAddressById(data.address)}</TableCell>
      <TableCell className={'hide-on-tablet'}>{data.description}</TableCell>
      <TableCell>
        <DeleteButton onClick={handleDelete} isLoading={isLoading} />
      </TableCell>
    </Row>
  );
};
