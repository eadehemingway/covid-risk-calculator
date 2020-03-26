import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';
import ForceDescription from './ForceDescription';

interface Props {
  base: number;
  noCovid: number;
  withCovid: number;
}

export default function TextInVisualisation({
  base,
  noCovid,
  withCovid,
  page,
}) {
  function getText() {
    switch (page) {
      case 1:
        return (
          <>
            <ForceDescription
              description="if Covid 19 had never happened:"
              percentage={base}
            />
            <DummyDiv />
            <DummyDiv />
          </>
        );
      case 2:
        return (
          <>
            <ForceDescription
              description="if Covid 19 had never happened:"
              percentage={base}
            />
            <ForceDescription
              description="given Covid 19's existence but assuming you dont get it:"
              percentage={noCovid}
            />
            <DummyDiv />
          </>
        );
      case 3:
        return (
          <>
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
          </>
        );

      default:
        return null;
    }
  }
  return <StatSummaries>{getText()}</StatSummaries>;
}

const StatSummaries = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 450px;
`;

const DummyDiv = styled.div`
  min-width: 200px;
`;
