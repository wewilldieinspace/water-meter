import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '@/components';
import { theme } from '@/theme';
import { HomePage } from '@/pages';
import { GlobalStyle } from '@/styles';
import { AppWrapper } from './App.styles';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <HomePage />
      </AppWrapper>
    </ThemeProvider>
  );
};
