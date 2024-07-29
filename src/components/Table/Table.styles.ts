import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
  height: 100%;
`;

export const TableStyled = styled.table`
  width: 100%;
  border: 1px ${({ theme }) => theme.colors.blue_b};
  border-radius: 12px;
  overflow: hidden;
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`;

export const TableHeader = styled.thead`
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 13px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.gray_500};
  font-weight: 500;
  line-height: 16px;
  background-color: ${({ theme }) => theme.colors.blue};

  th {
    padding: 8px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    th {
      padding: 18px 0;
    }
  }
`;

export const TableBody = styled.tbody`
  background-color: ${(props) => props.theme.colors.background};
`;
