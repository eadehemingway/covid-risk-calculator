import React, { useEffect } from 'react';
import styled from 'styled-components';
import TextInVisualisation from './TextInVisualisation';
import ForceDirectedVis from './ForceDirectedViz';
import SliderPanel from './SliderPanel';

export default function Visualisations() {
  return (
    <Container>
      <TextInVisualisation />
      <ForceDirectedVis />
      <StyledSvg />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2.5;
`;
const StyledSvg = styled.svg`
  position: absolute;
  width: 850px;
  height: 600px;
`;
