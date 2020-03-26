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
  const [comingFromLeft, setComingFromLeft] = useState(false);
  function movePageRight() {
    setComingFromLeft(true);
    setPage(page + 1);
  }
  function getVisualisation() {
    switch (page) {
      case 1:
        return (
          <ForceDirected
            id="force-directed"
            deathRate={baseRate}
            position={0}
            x={150}
          />
        );
      case 2:
        return (
          <ForceDirected
            id="force-directed"
            deathRate={mortalityRiskNoCovid}
            position={1}
            x={700}
          />
        );
      case 3:
        if (comingFromLeft) {
          return (
            <ForceDirected
              id="force-directed"
              deathRate={mortalityRiskWithCovid}
              position={2}
              x={300}
            />
          );
        } else {
          return (
            <>
              <ForceDirected
                id="force-directed"
                deathRate={baseRate}
                position={0}
                x={150}
              />
              <ForceDirected
                id="force-directed"
                deathRate={mortalityRiskNoCovid}
                position={1}
                x={700}
              />
              <ForceDirected
                id="force-directed"
                deathRate={mortalityRiskWithCovid}
                position={2}
                x={300}
              />
            </>
          );
        }
      default:
        return null;
    }
  }
  const mortalityRiskNoCovid = baseRate * relativeRisk;
  const mortalityRiskWithCovid = mortalityRiskNoCovid * 1.2;

  return (
    <VisContainer>
      <TextInVisualisation
        page={page}
        base={baseRate}
        noCovid={mortalityRiskNoCovid}
        withCovid={mortalityRiskWithCovid}
      />
      {getVisualisation()}

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
  width: 950px;
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
