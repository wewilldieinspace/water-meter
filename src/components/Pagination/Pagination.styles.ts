import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  position: fixed;
  padding: 8px 0 28px;
  bottom: 0;
  right: 28px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;
