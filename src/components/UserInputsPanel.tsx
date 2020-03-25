import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';
import AgeInput from './AgeInput';
import SexInput from './SexInput';
import ConditionsInput from './ConditionsInput';

export default function UserInputsPanel() {
  return (
    <Container>
      <Title>
        How <br />
        high is
        <br /> my risk?
      </Title>
      <div>
        <AgeInput />
        <SexInput />
        <ConditionsInput />
      </div>
      <ButtonWrapper>
        <ButtonStyled>Calculate</ButtonStyled>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  border-right: 1px solid #ff7c03;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled(T.H1)`
  margin: 20px;
  margin-right: 0;
`;

const ButtonStyled = styled.button`
  background: #ff7c03;
  color: white;
  border-radius: 2px;
  font-family: 'abril-Fatface';
  width: fit-content;
  font-size: 18px;
  padding: 10px;
  border: none;
  margin: 20px;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
