import React, { useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../assets/images/down-arrow.svg';
import ColumnChart from './ColumnChart';

export default function PageTwo({ page, setPage }) {
  function movePageRight() {
    setPage(page + 1);
  }
  function movePageLeft() {
    setPage(page - 1);
  }

  return (
    <>
      <VisContainer>
        <LeftArrowStyled src={arrow} onClick={movePageLeft} />
        <ColumnChart id="column-chart" />
        <RightArrowStyled src={arrow} onClick={movePageRight} />
        <StyledSvg id="column-chart" />
      </VisContainer>
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
