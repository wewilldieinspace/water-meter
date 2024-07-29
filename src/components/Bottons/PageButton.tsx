import React, { FC } from 'react';
import { PageButtonProps } from './Bottons.types';
import { PageButtonStyled } from './Buttons.styles';

export const PageButton: FC<PageButtonProps> = ({
  active = false,
  children,
  ...props
}) => {
  return (
    <PageButtonStyled active={active} {...props}>
      {children}
    </PageButtonStyled>
  );
};
