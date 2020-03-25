import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import * as TS from '../types';

interface Props {
  option: TS.Option;
  selectOption: (a: TS.Option) => void;
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
      <T.P3>{option.name}</T.P3>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
`;
