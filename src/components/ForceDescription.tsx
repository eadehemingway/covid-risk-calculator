import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';

interface Props {
  description: string;
  percentage: number;
}

export default function ForceDescription({ description, percentage }) {
  return (
    <div>
      <Percentage>{percentage}%</Percentage>
      <ForceTitleStyled>{description}</ForceTitleStyled>
    </div>
  );
}

const ForceTitleStyled = styled(T.P2)`
  width: 200px;
  text-align: left;
  font-size: 12px;
  max-width: 200px;
`;

const Percentage = styled(T.H1)`
  width: 200px;
  text-align: right;
`;
