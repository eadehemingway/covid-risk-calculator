import React, { useEffect } from 'react';
import styled from 'styled-components';
import { T } from '../typography';
import SliderPanel from './SliderPanel';

export default function TextInVisualisation() {
  return (
    <Container>
      <ForceTitles>
        <ForceTitleStyled>if Covid 19 had never happened:</ForceTitleStyled>
        <ForceTitleStyled>
          given Covid 19's existence but assuming you dont get it:
        </ForceTitleStyled>
        <ForceTitleStyled>if you get Covid 19:</ForceTitleStyled>
      </ForceTitles>
      <StatSummaries>
        <Percentage>0.2%</Percentage>
        <Percentage>0.2%</Percentage>
        <Percentage>0.2%</Percentage>
      </StatSummaries>
      <SliderPanel />
    </Container>
  );
}

const ForceTitleStyled = styled(T.P3)`
  padding-top: 120px;
  padding-left: 90px;
  font-size: 12px;
  max-width: 200px;
`;
const Percentage = styled(T.H1)`
  padding-left: 90px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const ForceTitles = styled.div`
  display: flex;
`;
const StatSummaries = styled.div`
  display: flex;
`;
