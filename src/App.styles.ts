import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 10px 0;
  }
}
`;
