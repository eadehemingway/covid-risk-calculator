import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';
import ForceDescription from './ForceDescription';

interface Props {
  base: number;
  noCovid: number;
  withCovid: number;
}

export default function TextInVisualisation({ base, noCovid, withCovid }) {
  return (
    <StatSummaries>
      <ForceDescription
        description="if Covid 19 had never happened:"
        percentage={base}
      />
      <ForceDescription
        description="given Covid 19's existence but assuming you dont get it:"
        percentage={noCovid}
      />
      <ForceDescription
        description="if you get Covid 19:"
        percentage={withCovid}
      />
    </StatSummaries>
  );
}

const StatSummaries = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 450px;
`;
