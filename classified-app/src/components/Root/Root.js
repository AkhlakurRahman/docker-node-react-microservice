import React from 'react';
import styled from 'styled-components';

import Login from './Login';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <Container>
        <Content>akjdflasjfsdjf</Content>
        <Sidebar>
          <Login />
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Root;
