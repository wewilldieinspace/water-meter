import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  color: white;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.gray_800};
`;
