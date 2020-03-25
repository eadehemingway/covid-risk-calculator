import React from 'react';
import styled from 'styled-components';

import { T } from './Typography';
import cross from '../cross.svg';

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
      <Image src={cross} />
      <T.P3>{option}</T.P3>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 5px;
  height: 25px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fe9839;
  margin: 2px;
`;

const Image = styled.img`
  height: 12px;
  width: 12px;
  margin-right: 5px;
`;
