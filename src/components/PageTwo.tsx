import React, { useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../assets/images/down-arrow.svg';
import ColumnChart from './ColumnChart';
import T from './Typography';

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
        <NumberContainer>
          <div>
            <T.H3>0.0005%</T.H3>
            <T.P3> of the population are like you</T.P3>
          </div>
          <div>
            <T.H3>2000</T.H3>
            <T.P3> people</T.P3>
          </div>
        </NumberContainer>
        <StyledSvg id="column-chart" />
      </VisContainer>
    </>
  );
}

const NumberContainer = styled.div`
  margin-top: 100px;
  display: flex;

  justify-content: space-around;
`;

const VisContainer = styled.div`
  width: 100%;
`;
const StyledSvg = styled.svg`
  width: 700px;
  height: 410px;
`;

const RightArrowStyled = styled.img`
  transform: rotate(270deg);
  width: 60px;
  position: absolute;
  right: 0;
  top: 40%;
  cursor: pointer;
`;

const LeftArrowStyled = styled.img`
  transform: rotate(90deg);
  width: 60px;
  position: absolute;
  left: 0;
  top: 40%;
  cursor: pointer;
`;
