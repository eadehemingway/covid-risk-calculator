import React from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';

export default function Drawer() {
  return (
    <Container>
      <ForceDirected deathRate={5} id="one" />
      <ForceDirected deathRate={5} id="two" />
      <ForceDirected deathRate={5} id="three" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2;
`;
