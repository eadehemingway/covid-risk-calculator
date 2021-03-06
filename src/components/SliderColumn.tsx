import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import T from './Typography';
import colors from '../style/colors';

interface Props {
  title: string;
  subtitle: string;
  id: string;
  handleChange: any;
  upperLabel: string;
  lowerLabel: string;
}

export default function SliderColumn({
  title,
  subtitle,
  id,
  handleChange,
  upperLabel,
  lowerLabel,
}: Props) {
  const widthOfSliderPanel = (window.innerWidth / 100) * 70;
  const columnWidth = (widthOfSliderPanel / 100) * 30;
  const sliderPadding = 20;
  return (
    <Column columnWidth={columnWidth}>
      <Writing>
        <SliderTitle>{title}</SliderTitle>
        <Subtitle>{subtitle}</Subtitle>
      </Writing>
      <Slider
        id={id}
        setVal={handleChange}
        columnWidth={columnWidth}
        sliderPadding={sliderPadding}
      />
      <Wrapper>
        <LabelWrapper>
          <Label>{lowerLabel}</Label>
          <Label style={{ textAlign: 'right' }}>{upperLabel}</Label>
        </LabelWrapper>
        <SliderSvg
          id={id}
          columnWidth={columnWidth}
          sliderPadding={sliderPadding}
        />
        ;
      </Wrapper>
    </Column>
  );
}
interface Column {
  columnWidth: number;
}
const Column = styled.div`
  max-height: 100%;
  margin: 50px 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ columnWidth }: Column) => columnWidth}px;
`;
const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  bottom: 71px;
`;
interface SliderSvg {
  columnWidth: number;
  sliderPadding: number;
}
const SliderSvg = styled.svg`
  width: ${({ columnWidth, sliderPadding }: SliderSvg) =>
    columnWidth + sliderPadding * 2}px;
  height: 60px;
  position: absolute;
  left: -20px;
  bottom: 0;
  margin-bottom: 40px;
`;

const SliderTitle = styled(T.H4)`
  margin-bottom: 15px;
`;
const Label = styled(T.P3)`
  max-width: 65px;
`;
const Subtitle = styled(T.P3)`
  margin-right: 30px;
`;

const Writing = styled.div``;
const Wrapper = styled.div`
  position: relative;
  bottom: 0;
`;
