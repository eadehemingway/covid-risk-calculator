import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { T } from './Typography';

interface Props {
  description: string;
  percentage: number;
}

export default function ForceDescription({ description, percentage }) {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
  }, []);
  return (
    <div>
      <Percentage style={{ opacity }}>{percentage}%</Percentage>
      <ForceTitleStyled style={{ opacity }}>{description}</ForceTitleStyled>
    </div>
  );
}

const ForceTitleStyled = styled(T.P2)`
  width: 200px;
  text-align: left;
  font-size: 12px;
  max-width: 200px;
  transition: opacity 0.5s;
`;

const Percentage = styled(T.H1)`
  width: 200px;
  text-align: right;
  transition: opacity 0.5s;
`;
