import React, { FC } from 'react';
import BasketIcon from '@/assets/basket.svg';
import { DeleteButtonProps } from './Bottons.types';
import { DeleteButtonStyled } from './Buttons.styles';

export const DeleteButton: FC<DeleteButtonProps> = ({
  isLoading = false,
  ...props
}) => {
  return (
    <DeleteButtonStyled isLoading={isLoading} disabled={isLoading} {...props}>
      <BasketIcon />
    </DeleteButtonStyled>
  );
};
