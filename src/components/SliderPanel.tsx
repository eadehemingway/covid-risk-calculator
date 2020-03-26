import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import T from './Typography';
import { colors } from '../colors';

interface Props {
  relativeRisk: number;
  setRelativeRisk: (relativeRisk: number) => void;
}

export default function SliderPanel({ relativeRisk, setRelativeRisk }: Props) {
  return (
    <Container>
      <Title>
        Change The <br />
        Assumptions
      </Title>
      <Slider id="slider-one" />
      <Slider id="slider-two" />
      <SliderSvg id={`slider-one`} />;
      <SliderSvg id={`slider-two`} />;
    </Container>
  );
}

const Container = styled.div`
  min-height: 200px;
  min-width: 100%;
  border-top: 1px solid ${colors.orange};
  display: flex;
  justify-content: space-between;
`;

const SliderSvg = styled.svg`
  width: 200px;
  height: 100px;
`;
const Title = styled(T.H3)`
  margin-left: 30px;
  margin-top: 30px;
`;
