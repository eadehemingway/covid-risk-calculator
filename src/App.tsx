import React from 'react';
import styled from 'styled-components';

import './App.css';
import UserInputsDrawer from './components/Drawer';
import Visualisations from './components/Visualisations';

export default function App() {
  return (
    <Container>
      <UserInputsDrawer />
      <Visualisations />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
