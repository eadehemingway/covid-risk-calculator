import React from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import { T } from '../typography';

export default function AgeInput() {
  return (
    <InputWrapper title="Age">
      <T.P3> How old are you?</T.P3>
      <TextInputStyled type="text" />
    </InputWrapper>
  );
}
const TextInputStyled = styled.input`
  background: none;
  border: 1px solid #ff7c03;
  padding: 10px;
  font-family: 'abril-Fatface';
  outline-color: #ff7c03;
`;
