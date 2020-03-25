import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import './App.css';
import UserInputsPanel from './components/UserInputsPanel';
import Right from './components/Right';

const App = () => {
  return (
    <Container>
      <UserInputsPanel />
      <Right />
    </Container>
  );
};

export default hot(App);

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
`;
