import React, { useEffect } from 'react';
import styled from 'styled-components';
import ForceDirected from './ForceDirected';
import arrow from '../assets/images/down-arrow.svg';
import TextInVisualisation from './TextInVisualisation';
import BarChart from './BarChart';

export default function Visualisation({ page, setPage }) {
  function movePageRight() {
    setPage(page + 1);
  }
  function movePageLeft() {
    setPage(page - 11);
  }

  function getVisualisation() {
    if (page === 1) {
      return (
        <>
          <ForceDirected id="force-directed" deathRate={0.1} position={0} />
          <ForceDirected id="force-directed" deathRate={2.2} position={1} />
          <ForceDirected id="force-directed" deathRate={25} position={2} />
          <RightArrowStyled src={arrow} onClick={movePageRight} />
          <StyledSvg id="force-directed" />
        </>
      );
    }
    if (page === 2) {
      return (
        <>
          <LeftArrowStyled src={arrow} onClick={movePageLeft} />
          <BarChart id="barChart" />
          <RightArrowStyled src={arrow} onClick={movePageRight} />
          <StyledSvg id="barChart" />
        </>
      );
    }
    if (page === 3) {
      return (
        <>
          <LeftArrowStyled src={arrow} onClick={movePageLeft} />
          <div> page three</div>
          <StyledSvg id="column-chart" />
        </>
      );
    }
  }
  function getVisualisationText() {
    if (page === 1) {
      return <TextInVisualisation />;
    }
    if (page === 2) {
      return <div> page two</div>;
    }
    if (page === 3) {
      return (
        <>
          <div> page three</div>
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
