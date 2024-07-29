import React, { FC } from 'react';
import { TableRow } from '@/components';
import { TableProps } from './Table.types';
import { useTranslation } from 'react-i18next';
import {
  TableBody,
  TableHeader,
  TableStyled,
  TableWrapper,
} from './Table.styles';

export const Table: FC<TableProps> = ({ data, initialIndex = 1, ...props }) => {
  const { t } = useTranslation();
  return (
    <TableWrapper>
      <TableStyled {...props}>
        <TableHeader>
          <tr>
            <th>{t('table.index')}</th>
            <th>{t('table.type')}</th>
            <th className={'hide-on-mobile'}>{t('table.installation_date')}</th>
            <th className={'hide-on-mobile'}>{t('table.is_automatic')}</th>
            <th>{t('table.current_values')}</th>
            <th>{t('table.address')}</th>
            <th className={'hide-on-tablet'}>{t('table.note')}</th>
            <th />
          </tr>
        </TableHeader>
        <TableBody>
          {data.map((item: any, index: number) => (
            <TableRow key={item.id} index={initialIndex + index} data={item} />
          ))}
        </TableBody>
      </TableStyled>
    </TableWrapper>
  );
};
