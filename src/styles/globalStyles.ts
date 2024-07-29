import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.alice_blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .hide-on-tablet {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .hide-on-mobile {
      display: none;
    }
  }
`;
