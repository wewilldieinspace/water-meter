import styled from 'styled-components';

export const Row = styled.tr`
  padding: 10px 0;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue_b};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
