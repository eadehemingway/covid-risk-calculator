import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';
import arrow from '../assets/images/down-arrow.svg';
import TextInVisualisation from './TextInVisualisation';

import SliderPanel from './SliderPanel';

export default function PageOne({
  page,
  setPage,
  baseRate,
  relativeRisk,
  setRelativeRisk,
}) {
  const [sliderPanelOpen, setSliderPanelOpen] = useState(false);
  function movePageRight() {
    setPage(page + 1);
  }

  const mortalityRiskNoCovid = baseRate * relativeRisk;
  const mortalityRiskWithCovid = mortalityRiskNoCovid * 1.2;

  return (
    <VisContainer>
      <TextInVisualisation
        base={baseRate}
        noCovid={mortalityRiskNoCovid}
        withCovid={mortalityRiskWithCovid}
      />
      <ForceDirected id="force-directed" deathRate={baseRate} position={0} />
      <ForceDirected
        id="force-directed"
        deathRate={mortalityRiskNoCovid}
        position={1}
      />
      <ForceDirected
        id="force-directed"
        deathRate={mortalityRiskWithCovid}
        position={2}
      />

      <RightArrowStyled src={arrow} onClick={movePageRight} />
      <StyledSvg id="force-directed" />
      <SliderPanel
        sliderPanelOpen={sliderPanelOpen}
        setSliderPanelOpen={setSliderPanelOpen}
      />
    </VisContainer>
  );
}

const VisContainer = styled.div`
  height: 100%;
`;
const StyledSvg = styled.svg`
  width: 850px;
  height: 600px;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const RightArrowStyled = styled.img`
  transform: rotate(270deg);
  width: 60px;
  position: absolute;
  right: 0;
  top: 40%;
  cursor: pointer;
`;
