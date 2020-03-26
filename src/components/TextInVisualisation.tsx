import React from 'react';
import styled from 'styled-components';
import T from './Typography';
import ForceDescription from './ForceDescription';
import * as TS from '../types';

interface Props {
  base: number;
  noCovid: number;
  withCovid: number;
  age: number;
  sex: string;
  conditions: TS.Condition[];
}

export default function TextInVisualisation({
  base,
  noCovid,
  withCovid,
  page,
  age,
  sex,
  conditions,
}) {
  function getInitialString() {
    const sexStr = sex === 'Female' ? 'Woman' : 'Male';
    const conditionsStr =
      conditions.length === 0 ? 'no existing health conditions' : conditions[0];
    return `My estimated one year mortality risk as a ${age} year old ${sexStr} with ${conditionsStr}`;
  }
  const descriptions = [
    `${getInitialString()}, before the current emergency. i.e. if corona virus had never happened`,
    'My estimated  one year mortality risk  if my care is affected by pressures on the NHS due to the current emergency (assuming I am still not invected)',
    'My estimated  one year mortality risk if I become infected by corona virus in this current emergency',
  ];
  function getText() {
    switch (page) {
      case 1:
        return (
          <>
            <ForceDescription description={descriptions[0]} percentage={base} />
            <DummyDiv />
            <DummyDiv />
          </>
        );
      case 2:
        return (
          <>
            <ForceDescription description={descriptions[0]} percentage={base} />
            <ForceDescription
              description={descriptions[1]}
              percentage={noCovid}
            />
            <DummyDiv />
          </>
        );
      case 3:
        return (
          <>
            <ForceDescription description={descriptions[0]} percentage={base} />
            <ForceDescription
              description={descriptions[1]}
              percentage={noCovid}
            />
            <ForceDescription
              description={descriptions[2]}
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
