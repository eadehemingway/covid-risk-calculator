import React, { useEffect } from 'react';
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
  function movePageRight() {
    setPage(page + 1);
    console.log('page:', page);
  }

  return (
    <VisContainer>
      <TextInVisualisation
        base={baseRate}
        noCovid={relativeRisk}
        withCovid={relativeRisk}
      />

      <ForceDirected id="force-directed" deathRate={baseRate} position={0} />
      <ForceDirected
        id="force-directed"
        deathRate={baseRate * relativeRisk}
        position={1}
      />
      <ForceDirected
        id="force-directed"
        deathRate={baseRate * relativeRisk}
        position={2}
      />

      <RightArrowStyled src={arrow} onClick={movePageRight} />
      <StyledSvg id="force-directed" />
      <SliderPanel
        relativeRisk={relativeRisk}
        setRelativeRisk={setRelativeRisk}
      />
    </VisContainer>
  );
}

const VisContainer = styled.div`
  height: 70%;
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
