import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import * as TS from '../types';

interface Props {
  condition: TS.Condition;
  selectCondition: (a: TS.Condition) => void;
}

export default function ConditionsDropdownConditions({
  condition,
  selectCondition,
}: Props) {
  function handleSelectCondition() {
    selectCondition(condition);
  }

  return (
    <Container onClick={handleSelectCondition}>
      <T.P3>{condition.name}</T.P3>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
  cursor: pointer;
`;
