import React from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import { T } from './Typography';
import cross from '../cross.svg';
import { colors } from '../style/colors';

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
      <T.P2>{condition.name}</T.P2>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px 7px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.orange};
  margin: 2px;
  cursor: pointer;
`;

const Image = styled.img`
  height: 12px;
  width: 12px;
  margin-right: 5px;
`;
