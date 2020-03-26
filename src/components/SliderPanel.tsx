import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import { colors } from '../colors';
import arrow from '../assets/images/down-arrow.svg';
import SliderColumn from './SliderColumn'

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
  const height = sliderPanelOpen ? 300 : 50;

  return (
    <Container style={{ height }}>
      <Title>
        Change The <br />
        Assumptions
      </Title>

    <SliderColumn 
    id="slider-one" 
    title="Estimated affect on the NHS of the current emergency" 
    subtitle="The lowest" 
    handleChange={setNHSAffectedRate}
    />
      <SliderColumn 
      id="slider-two" 
      title="Estimated mortality rate of people with my condition" 
      subtitle="blah" handleChange={setCovidMortalityRate}/>

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
  background: ${colors.backgroundGrey};
  overflow: hidden;
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
