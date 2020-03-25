import React from 'react';
import styled from 'styled-components';

interface Props {
  relativeRisk: number;
  setRelativeRisk: (relativeRisk: number) => void;
}

export default function SliderPanel({ relativeRisk, setRelativeRisk }: Props) {
  return <Container></Container>;
}

const Container = styled.div`
  min-height: 200px;
  min-width: 100%;
  border-top: 1px solid #ff7c03;
`;
