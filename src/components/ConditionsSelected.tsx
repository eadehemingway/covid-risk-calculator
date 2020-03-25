import React from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import Condition from './ConditionsSelectedOption';

interface Props {
  conditions: TS.Condition[];
  unselectCondition: (condition: TS.Condition) => void;
}

export default function Selected({ conditions, unselectCondition }: Props) {
  if (conditions.length === 0) return <></>;

  return (
    <Container>
      {conditions.map((condition: TS.Condition) => {
        return (
          <Condition
            condition={condition}
            unselectCondition={unselectCondition}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 10px;
`;
