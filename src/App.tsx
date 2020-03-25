import React from 'react';
import styled from 'styled-components';

import './App.css';
import UserInputsPanel from './components/UserInputsPanel';
import Visualisations from './components/VisualisationPanel';

export default function App() {
  return (
    <Container>
      <UserInputsPanel />
      <Visualisations />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
`;
