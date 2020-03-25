import React from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';

interface Props {
  baseRate: number;
  relativeRisk: number;
}

export default function ForceDirectedVis({ baseRate, relativeRisk }: Props) {
  return (
    <Container>
      <ForceDirected deathRate={baseRate} position={0} />
      <ForceDirected deathRate={baseRate * relativeRisk} position={1} />
      <ForceDirected deathRate={baseRate * relativeRisk} position={2} />
    </Container>
  );
}

const Container = styled.div``;
