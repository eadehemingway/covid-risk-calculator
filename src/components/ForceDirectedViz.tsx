import React, { useEffect } from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';

export default function ForceDirectedVis() {
  return (
    <Container>
      <ForceDirected deathRate={0.1} position={0} />
      <ForceDirected deathRate={2.2} position={1} />
      <ForceDirected deathRate={25} position={2} />
    </Container>
  );
}

const Container = styled.div``;
