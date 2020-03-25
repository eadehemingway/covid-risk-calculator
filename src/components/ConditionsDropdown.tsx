import React from 'react';
import styled from 'styled-components';

import Option from './ConditionsDropdownOption';

interface Props {
  inputValue: string;
  selectedOptions: string[];
  selectOption: (a: string) => void;
  dropdownOpen: boolean;
}

export default function Drawer({
  inputValue,
  selectedOptions,
  selectOption,
  dropdownOpen,
}: Props) {
  const options = rawOptions.filter(option => {
    const filterByInputValue =
      option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    const filterBySelectedOption = selectedOptions.indexOf(option) === -1;
    if (filterByInputValue && filterBySelectedOption) return true;
    return false;
  });

  if (options.length === 0) {
    return null;
  }

  return (
    <Container open={dropdownOpen}>
      {options.map(option => {
        return <Option option={option} selectOption={selectOption} />;
      })}
    </Container>
  );
}

interface Container {
  open: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  max-height: 0;
  overflow: scroll;
  position: absolute;
  z-index: 2;
  top: 50px;
  max-width: 250px;
  width: 100%;
  ${({ open }: Container) => {
    if (open) {
      return `
        max-height: 300px;
        border-bottom: 2px solid #003a1b;
      `;
    }
  }};
`;

const rawOptions: string[] = [
  'COPD',
  'severe COPD',
  'asthma',
  'Coronary Heart DIsease (CHD)',
  'AMI',
  'HF',
  'AAA',
  'AF',
  'TIA',
  'stable angina',
  'unstable angina',
  'Stroke NOS',
  'Stroke ischaemic',
  'Subarachnoid hemorrhage',
  'Stroke intracerebral',
  'PAD',
  'SCD',
  'hypertension',
];
