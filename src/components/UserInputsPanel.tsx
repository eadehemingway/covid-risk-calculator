import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';
import Age from './AgeInput';
import Sex from './SexInput';
import Conditions from './Conditions';

export default function UserInputsPanel() {
  return (
    <Container>
      <Title>
        How <br />
        high is
        <br /> my risk?
      </Title>
      <InputWrapper>
        <Conditions />
        <Age />
        <Sex />
      </InputWrapper>
      <ButtonWrapper>
        <ButtonStyled>Calculate</ButtonStyled>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: scroll;
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

const InputWrapper = styled.div`
  border-bottom: 1px solid #ff7c03;
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
