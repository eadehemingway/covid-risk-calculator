import React, { useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../assets/images/down-arrow.svg';
import BarChart from './BarChart';

export default function PageThree({ page, setPage }) {
  function movePageLeft() {
    setPage(page - 1);
  }

  return (
    <VisContainer>
      <LeftArrowStyled src={arrow} onClick={movePageLeft} />
      <BarChart id="bar-chart" />
      <StyledSvg id="bar-chart" />
    </VisContainer>
  );
}

const VisContainer = styled.div`
  position: absolute;
`;
const StyledSvg = styled.svg`
  width: 850px;
  height: 600px;
`;

const LeftArrowStyled = styled.img`
  transform: rotate(90deg);
  width: 60px;
  position: absolute;
  left: 0;
  top: 40%;
`;
