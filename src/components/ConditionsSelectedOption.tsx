import React from 'react';
import styled from 'styled-components';

import { T } from './Typography';

interface Props {
  option: string;
  unselectOption: (option: string) => void;
}

export default function SelectedOption({ option, unselectOption }: Props) {
  function handleUnselectOption() {
    unselectOption(option);
  }

  return (
    <Container onClick={handleUnselectOption}>
      <T.P3>{option}</T.P3>
    </Container>
  );
}

const Container = styled.div`
  padding: 2px;
  background-color: #fe9839;
`;
