import React, { useState } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import './App.css';
import UserInputsPanel from './components/UserInputsPanel';
import Visualisations from './components/VisualisationPanel';

const App = () => {
  const [baseRate, setBaseRate] = useState(2);

  return (
    <Container>
      <UserInputsPanel setBaseRate={setBaseRate} />
      <Visualisations baseRate={baseRate} />
    </Container>
  );
};

export default hot(App);

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
`;
