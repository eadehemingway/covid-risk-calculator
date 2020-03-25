import React, { useState } from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import InputWrapper from './InputWrapper';
import ConditionsDropdown from './ConditionsDropdown';
import Selected from './ConditionsSelected';

interface Props {
  conditions: TS.Condition[];
  setConditions: (a: TS.Condition[]) => void;
}

export default function ConditionsInput({ conditions, setConditions }: Props) {
  const [value, setValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleOpenDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setValue(value);
  }

  function handleSelectCondition(condition: TS.Condition) {
    const newConditions = conditions.concat(condition);
    setConditions(newConditions);
  }

  function handleUnselectCondition(condition: TS.Condition) {
    const newConditions = conditions.filter(selected => {
      return selected.name !== condition.name;
    });
    setConditions(newConditions);
  }

  return (
    <InputWrapper title="Pre-existing conditions">
      <Container>
        <Input
          value={value}
          onChange={handleChange}
          onClick={handleOpenDropdown}
        />
        <ConditionsDropdown
          inputValue={value}
          conditions={conditions}
          selectCondition={handleSelectCondition}
          dropdownOpen={dropdownOpen}
        />
        <Selected
          conditions={conditions}
          unselectCondition={handleUnselectCondition}
        />
      </Container>
    </InputWrapper>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Input = styled.input`
  padding: 0 10px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1;
  height: 45px;
  max-width: 250px;
  width: 100%;
  border-radius: 0;
`;
