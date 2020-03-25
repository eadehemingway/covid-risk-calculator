import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  relativeRisk: number;
  setRelativeRisk: (relativeRisk: number) => void;
}

export default function SliderPanel({ relativeRisk, setRelativeRisk }: Props) {
  return <Container></Container>;
}

const Container = styled.div`
  height: 300px;
  min-width: 100%;
  border: 2px solid red;
`;
