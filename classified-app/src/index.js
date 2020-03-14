import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Root from '#root/components/Root';

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
  <>
    <GlobalStyles />
    <Root />
  </>,
  document.getElementById('app')
);
