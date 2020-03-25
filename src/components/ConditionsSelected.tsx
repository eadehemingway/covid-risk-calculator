import React from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import Option from './ConditionsSelectedOption';

interface Props {
  selectedOptions: TS.Option[];
  unselectOption: (option: TS.Option) => void;
}

export default function Selected({ selectedOptions, unselectOption }: Props) {
  if (selectedOptions.length === 0) return <></>;

  return (
    <Container>
      {selectedOptions.map((option: TS.Option) => {
        return <Option option={option} unselectOption={unselectOption} />;
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
