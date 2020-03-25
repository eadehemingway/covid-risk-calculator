import React from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import { T } from './Typography';
import cross from '../cross.svg';

interface Props {
  condition: TS.Condition;
  unselectCondition: (condition: TS.Condition) => void;
}

export default function SelectedCondition({
  condition,
  unselectCondition,
}: Props) {
  function handleUnselectCondition() {
    unselectCondition(condition);
  }

  return (
    <Container onClick={handleUnselectCondition}>
      <Image src={cross} />
      <T.P3>{condition.name}</T.P3>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 5px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  background-color: #fe9839;
  margin: 2px;
`;

const Image = styled.img`
  height: 12px;
  width: 12px;
  margin-right: 5px;
`;
