import React, { useEffect } from 'react';
import styled from 'styled-components';
import TextInVisualisation from './TextInVisualisation';
import ForceDirectedVis from './ForceDirectedViz';
import SliderPanel from './SliderPanel';

export default function Right() {
  return (
    <Container>
      <TextInVisualisation />
      <ForceDirectedVis />
      <StyledSvg />
      <SliderPanel />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2.5;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledSvg = styled.svg`
  position: absolute;
  width: 850px;
  height: 600px;
`;
