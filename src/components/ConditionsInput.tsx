import React, { useState } from 'react';
import styled from 'styled-components';

import InputWrapper from './InputWrapper';
import ConditionsDropdown from './ConditionsDropdown';
import Selected from './ConditionsSelected';

export default function ConditionsInput() {
  const [value, setValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  function handleOpenDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setValue(value);
  }

  function handleSelectOption(option: string) {
    const newOptions = selectedOptions.concat(option);
    setSelectedOptions(newOptions);
  }

  function handleUnselectOption(option: string) {
    const newOptions = selectedOptions.filter(op => {
      return op !== option;
    });
    setSelectedOptions(newOptions);
  }

  return (
    <InputWrapper title="Conditions">
      <Container>
        <input
          value={value}
          onChange={handleChange}
          onClick={handleOpenDropdown}
        />
        <Selected
          selectedOptions={selectedOptions}
          unselectOption={handleUnselectOption}
        />
        <ConditionsDropdown
          inputValue={value}
          selectedOptions={selectedOptions}
          selectOption={handleSelectOption}
          dropdownOpen={dropdownOpen}
        />
      </Container>
    </InputWrapper>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
