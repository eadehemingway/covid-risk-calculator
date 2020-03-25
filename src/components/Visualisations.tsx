import React, { useEffect } from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';
import * as d3 from 'd3';
import { T } from '../typography';

export default function Visualisations() {
  return (
    <Container>
      <ForceTitles>
        <ForceTitleStyled>if Covid 19 had never happened:</ForceTitleStyled>
        <ForceTitleStyled>
          given Covid 19's existence but assuming you dont get it:
        </ForceTitleStyled>
        <ForceTitleStyled>if you get Covid 19:</ForceTitleStyled>
      </ForceTitles>
      <ForceDirected deathRate={0.1} position={0} />
      <ForceDirected deathRate={2.2} position={1} />
      <ForceDirected deathRate={25} position={2} />
      <StyledSvg id="visualisations" />
    </Container>
  );
}

const ForceTitleStyled = styled(T.P3)`
  padding-top: 120px;
  padding-left: 90px;
  font-size: 12px;
  max-width: 200px;
`;

const Container = styled.div`
  display: flex;
  flex: 2.5;
`;
const ForceTitles = styled.div`
  display: flex;
`;

const StyledSvg = styled.svg`
  position: absolute;
  width: 900px;
  height: 600px;
`;
