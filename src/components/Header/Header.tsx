import React, { FC } from 'react';
import { HeaderProps } from './Header.types';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper, Title } from './Header.styles';

export const Header: FC<HeaderProps> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper {...props}>
      <Title>{t('title')}</Title>
    </HeaderWrapper>
  );
};
