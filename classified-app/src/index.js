import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import graphqlClient from '#root/api/graphqlClient';
import Root from '#root/components/Root';
import * as theme from './theme';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto' sans-serif;
}
`;

render(
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Root />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('app')
);
