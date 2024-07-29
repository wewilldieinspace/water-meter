import styled from 'styled-components';

export const Cell = styled.td`
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_800};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 12px;
  }
`;
