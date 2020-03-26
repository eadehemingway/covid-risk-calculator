import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';

interface Props {
  base: number;
  noCovid: number;
  withCovid: number;
}

export default function TextInVisualisation({ base, noCovid, withCovid }) {
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
        <Percentage>{base}%</Percentage>
        <Percentage>{noCovid}%</Percentage>
        <Percentage>{withCovid}%</Percentage>
      </StatSummaries>
    </Container>
  );
}

const ForceTitleStyled = styled(T.P2)`
  padding-top: 120px;
  width: 200px;
  text-align: center;
  font-size: 12px;
  max-width: 200px;
`;

const Percentage = styled(T.H1)`
  width: 200px;
  text-align: center;
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
  justify-content: space-around;
`;

const StatSummaries = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;
