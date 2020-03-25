import React, { useEffect } from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';
import * as d3 from 'd3';

export default function Visualisations() {
  useEffect(() => {
    d3.select(`#visualisations`)
      .attr('width', 900)
      .attr('height', 600);
  }, []);
  return (
    <Container>
      <ForceDirected deathRate={0.1} position={0} title="test" />
      <ForceDirected deathRate={2.2} position={1} title="test" />
      <ForceDirected deathRate={25} position={2} title="test" />
      <svg id="visualisations" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2;
`;
