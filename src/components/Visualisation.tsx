import React, { useEffect } from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';
import arrow from '../assets/images/down-arrow.svg';
import TextInVisualisation from './TextInVisualisation';
import BarChart from './BarChart';
import ColumnChart from './ColumnChart';

export default function Visualisation({
  page,
  setPage,
  baseRate,
  relativeRisk,
  setRelativeRisk,
}) {
  const base = baseRate;
  const noCovid = baseRate * 1.1;
  const withCovid = baseRate * relativeRisk;
  function movePageRight() {
    setPage(page + 1);
  }
  function movePageLeft() {
    setPage(page - 1);
  }

  function getVisualisation() {
    if (page === 1) {
      return (
        <>
          <ForceDirected id="force-directed" deathRate={base} position={0} />
          <ForceDirected id="force-directed" deathRate={noCovid} position={1} />
          <ForceDirected
            id="force-directed"
            deathRate={withCovid}
            position={2}
          />
          <RightArrowStyled src={arrow} onClick={movePageRight} />
          <StyledSvg id="force-directed" />
        </>
      );
    }
    if (page === 2) {
      return (
        <>
          <LeftArrowStyled src={arrow} onClick={movePageLeft} />
          <ColumnChart id="column-chart" />
          <RightArrowStyled src={arrow} onClick={movePageRight} />
          <StyledSvg id="column-chart" />
        </>
      );
    }
    if (page === 3) {
      return (
        <>
          <LeftArrowStyled src={arrow} onClick={movePageLeft} />
          <BarChart id="bar-chart" />
          <StyledSvg id="bar-chart" />
        </>
      );
    }
  }
  function getVisualisationText() {
    if (page === 1) {
      return (
        <TextInVisualisation
          base={base}
          noCovid={noCovid}
          withCovid={withCovid}
        />
      );
    }
    if (page === 2) {
      return <div></div>;
    }
    if (page === 3) {
      return (
        <>
          <div> </div>
        </>
      );
    }
  }

  return (
    <>
      {getVisualisationText()}
      <VisContainer>{getVisualisation()}</VisContainer>
    </>
  );
}

const VisContainer = styled.div`
  position: absolute;
`;
const StyledSvg = styled.svg`
  width: 850px;
  height: 600px;
`;

const RightArrowStyled = styled.img`
  transform: rotate(270deg);
  width: 60px;
  position: absolute;
  right: 0;
  top: 40%;
`;

const LeftArrowStyled = styled.img`
  transform: rotate(90deg);
  width: 60px;
  position: absolute;
  left: 0;
  top: 40%;
`;
