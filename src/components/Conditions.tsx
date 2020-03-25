import React, { useState } from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import InputWrapper from './InputWrapper';
import ConditionsDropdown from './ConditionsDropdown';
import Selected from './ConditionsSelected';

export default function ConditionsInput() {
  const [value, setValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<TS.Option[]>([]);

  function handleOpenDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setValue(value);
  }

  function handleSelectOption(option: TS.Option) {
    const newOptions = selectedOptions.concat(option);
    setSelectedOptions(newOptions);
  }

  function handleUnselectOption(option: TS.Option) {
    const newOptions = selectedOptions.filter(selected => {
      return selected.name !== option.name;
    });
    setSelectedOptions(newOptions);
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
          selectedOptions={selectedOptions}
          selectOption={handleSelectOption}
          dropdownOpen={dropdownOpen}
        />
        <Selected
          selectedOptions={selectedOptions}
          unselectOption={handleUnselectOption}
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
