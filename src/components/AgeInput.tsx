import React from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import { T } from './Typography';

interface Props {
  age: number;
  setAge: (age: number) => void;
}

export default function Age({ age, setAge }: Props) {
  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const number = Number(value);
    setAge(number);
  }

  return (
    <InputWrapper title="Age:">
      <Input type="text" value={age} onChange={handleChange} />
    </InputWrapper>
  );
}
const Input = styled.input`
  border: 1px solid #ff7c03;
  padding: 10px;
  font-family: 'abril-Fatface';
  outline-color: #ff7c03;
`;
