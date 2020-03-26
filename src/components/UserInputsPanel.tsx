import React, { useState } from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import { T } from './Typography';
import Age from './AgeInput';
import Sex from './SexInput';
import Conditions from './Conditions';
import { colors } from '../colors';

interface Props {
  setBaseRate: (baseRate: number) => void;
  setPage: any;
}

export default function UserInputsPanel({ setBaseRate, setPage }: Props) {
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState('');

  const [conditions, setConditions] = useState<TS.Condition[]>([]);

  function calculateBaseRate() {
    const ageVariant = ageToMultiplier(age);
    const sexVariant = sexToMultiplier(sex);
    const conditionsVariant = conditionsToMultiplier(conditions);
    const baseRate = multiplyRate(ageVariant, sexVariant, conditionsVariant);
    setBaseRate(baseRate);
  }

  function ageToMultiplier(age: number) {
    return age > 70 ? 2 : 1;
  }

  function sexToMultiplier(sex: string) {
    return sex === 'Female' ? 1 : 1.2;
  }

  function conditionsToMultiplier(conditions: TS.Condition[]) {
    return conditions.reduce((acc, condition) => {
      return (acc += condition.mortalityRate);
    }, 1);
  }

  function multiplyRate(age: number, sex: number, conditions: number) {
    return age * sex * conditions;
  }

  function handleCalculate() {
    calculateBaseRate();
    setPage(1);
  }
  const haveValues = sex && age;
  return (
    <Container>
      <Title>
        How <br />
        high is
        <br /> my risk?
      </Title>
      <Inputs>
        <Age age={age} setAge={setAge} />
        <Sex sex={sex} setSex={setSex} />
        <Conditions conditions={conditions} setConditions={setConditions} />
      </Inputs>
      <ButtonStyled onClick={handleCalculate} disabled={!haveValues}>
        Calculate
      </ButtonStyled>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: scroll;
  border-right: 1px solid ${colors.orange};
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled(T.H1)`
  margin: 20px;
  margin-right: 0;
`;

const Inputs = styled.div`
  border-bottom: 1px solid ${colors.orange};
`;

interface ButtonStyled {
  disabled: boolean;
}

const ButtonStyled = styled.button`
  background: ${colors.orange};
  color: white;
  border-radius: 2px;
  font-family: 'Lexend';
  width: fit-content;
  font-size: 18px;
  padding: 10px;
  border: none;
  margin: 20px;
  align-self: flex-end;
  cursor: pointer;
  outline-color: ${colors.orange};
  opacity: ${({ disabled }: ButtonStyled) => (disabled ? 0.5 : 1)};
`;
