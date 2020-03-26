import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import T from './Typography';
import { colors } from '../colors';
import arrow from '../assets/images/down-arrow.svg';

interface Props {
  sliderPanelOpen: boolean;
  setSliderPanelOpen: any;
  setNHSAffectedRate: any;
  setCovidMortalityRate: any;
}

export default function SliderPanel({
  sliderPanelOpen,
  setSliderPanelOpen,
  setNHSAffectedRate,
  setCovidMortalityRate,
}: Props) {
  const height = sliderPanelOpen ? 200 : 50;
  return (
    <Container style={{ height }}>
      <Title>
        Change The <br />
        Assumptions
      </Title>
      <Column>
        <div>
          <T.H4>Estimated extra mortality impact of the current emergency</T.H4>
          <T.P3>
            The lowest likely estimate of this is around 20% (equal to the
            impact of the seasonal flu)
          </T.P3>
        </div>
        <Slider id="slider-one" setVal={setNHSAffectedRate} />
        <SliderSvg id={`slider-one`} />;
      </Column>
      <Column>
        <div>
          <T.H4>Extra mortality if I get infected with Covid</T.H4>
          <T.P3>This is the.... it is estimted to be between .....</T.P3>
        </div>
        <Slider id="slider-two" setVal={setCovidMortalityRate} />
        <SliderSvg id={`slider-two`} />;
      </Column>
      <Arrow
        src={arrow}
        sliderPanelOpen={sliderPanelOpen}
        onClick={() => setSliderPanelOpen(!sliderPanelOpen)}
      />
    </Container>
  );
}

const Container = styled.div`
  min-width: 100%;
  border-top: 1px solid ${colors.orange};
  display: flex;
  justify-content: space-between;
  transition: height 0.5s;
  position: absolute;
  bottom: 0;
  overflow: hidden;
`;
const Column = styled.div`
  width: 30%;
  min-height: 100%;
  max-height: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SliderSvg = styled.svg`
  width: 200px;
  height: 100px;
`;
const Title = styled(T.H3)`
  margin-left: 30px;
  margin-top: 50px;
`;

interface Arrow {
  sliderPanelOpen: boolean;
}
const Arrow = styled.img`
  position: absolute;
  right: 10px;
  width: 15px;
  cursor: pointer;
  top: 10px;
  transform: ${({ sliderPanelOpen }: Arrow) =>
    sliderPanelOpen ? null : 'rotate(180deg)'};
`;
