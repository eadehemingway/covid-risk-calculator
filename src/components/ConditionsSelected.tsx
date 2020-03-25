import React from 'react';
import styled from 'styled-components';

import Option from './ConditionsSelectedOption';

interface Props {
  selectedOptions: string[];
  unselectOption: (option: string) => void;
}

export default function Selected({ selectedOptions, unselectOption }: Props) {
  if (selectedOptions.length === 0) return <></>;

  return (
    <Container>
      {selectedOptions.map((option: string) => {
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
