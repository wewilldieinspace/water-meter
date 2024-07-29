import styled, { css } from 'styled-components';
import { DeleteButtonProps, PageButtonProps } from './Bottons.types';

export const CommonButton = styled.button`
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
`;

export const DeleteButtonStyled = styled(CommonButton).withConfig({
  shouldForwardProp: (prop) => !['isLoading'].includes(prop),
})<DeleteButtonProps>`
  color: ${(props) =>
    props.isLoading ? props.theme.colors.secondary : props.theme.colors.danger};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
  background-color: ${(props) =>
    props.isLoading ? props.theme.colors.white : props.theme.colors.red_100};

  &:hover {
    background: ${(props) =>
      props.isLoading ? props.theme.colors.white : props.theme.colors.red_200};

    & > svg:hover {
      fill: ${(props) =>
        props.isLoading
          ? props.theme.colors.gray_400
          : props.theme.colors.red_800};
    }
  }

  & > svg {
    fill: ${(props) =>
      props.isLoading
        ? props.theme.colors.gray_400
        : props.theme.colors.red_700};
    transition: all ease-in-out 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 16px;
  }
`;

export const PageButtonStyled = styled(CommonButton).withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})<PageButtonProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.gray_400 : theme.colors.white};
  color: ${({ theme }) => theme.colors.gray_800};
  border: '5px solid ${({ theme }) => theme.colors.gray_800}';

  ${({ active }) =>
    active &&
    css`
      pointer-events: none;
    `}

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#f1f1f1')};
    cursor: ${({ active, disabled }) =>
      active || disabled ? 'default' : 'pointer'};
  }
  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 16px;
  }
`;
