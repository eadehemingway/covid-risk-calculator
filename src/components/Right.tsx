import React, { useState } from 'react';
import styled from 'styled-components';
import TextInVisualisation from './TextInVisualisation';
import ForceDirectedVis from './ForceDirectedViz';
import SliderPanel from './SliderPanel';

interface Props {
  baseRate: number;
}

export default function Right({ baseRate }: Props) {
  const [relativeRisk, setRelativeRisk] = useState(2);
  return (
    <Container>
      <TextInVisualisation
        baseRate={baseRate}
        relativeRisk={relativeRisk}
        setRelativeRisk={setRelativeRisk}
      />
      <ForceDirectedVis baseRate={baseRate} relativeRisk={relativeRisk} />
      <StyledSvg />
      <SliderPanel
        relativeRisk={relativeRisk}
        setRelativeRisk={setRelativeRisk}
      />
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
