import React, { useEffect } from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';
import * as d3 from 'd3';

export default function Visualisations() {
  useEffect(() => {
    d3.select(`#visualisations`)
      .attr('width', 800)
      .attr('height', 600);
  }, []);
  return (
    <Container>
      <ForceDirected deathRate={5} position={1} />
      <ForceDirected deathRate={15} position={2} />
      <ForceDirected deathRate={25} position={3} />
      <svg id="visualisations" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2;
`;
