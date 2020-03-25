import React from 'react';
import styled from 'styled-components';
import { T } from './Typography';

interface Props {
  option: string;
  selectOption: (a: string) => void;
}

export default function ConditionsDropdownOptions({
  option,
  selectOption,
}: Props) {
  function handleSelectOption() {
    selectOption(option);
  }

  return (
    <Container onClick={handleSelectOption}>
      <T.P3>{option}</T.P3>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
`;
