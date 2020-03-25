import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';

interface Props {
  baseRate: number;
  relativeRisk: number;
  setRelativeRisk: (relativeRisk: number) => void;
}

export default function TextInVisualisation({
  baseRate,
  relativeRisk,
  setRelativeRisk,
}) {
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
        <Percentage>{baseRate}%</Percentage>
        <Percentage>{baseRate * relativeRisk}%</Percentage>
        <Percentage>{baseRate * relativeRisk}%</Percentage>
      </StatSummaries>
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
  height: 100%;
`;

const ForceTitles = styled.div`
  display: flex;
`;

const StatSummaries = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
