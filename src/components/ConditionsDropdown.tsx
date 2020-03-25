import React from 'react';
import styled from 'styled-components';

import Option from './ConditionsDropdownOption';
import * as TS from '../types';

interface Props {
  inputValue: string;
  selectedOptions: TS.Option[];
  selectOption: (a: TS.Option) => void;
  dropdownOpen: boolean;
}

export default function Drawer({
  inputValue,
  selectedOptions,
  selectOption,
  dropdownOpen,
}: Props) {
  const options = rawOptions.filter(option => {
    const lowerCaseOption = option.name.toLowerCase();
    const lowerCaseInput = inputValue.toLowerCase();
    const matchesInput = lowerCaseOption.indexOf(lowerCaseInput) > -1;
    const selectedOptionsName = selectedOptions.map(o => o.name);
    const notAlreadySelected = selectedOptionsName.indexOf(option.name) === -1;
    if (matchesInput && notAlreadySelected) return true;
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
      `;
    }
  }};
`;

const rawOptions = [
  { name: 'severe COPD', mortalityRate: 3 },
  { name: 'asthma', mortalityRate: 3 },
  { name: 'Coronary Heart DIsease (CHD)', mortalityRate: 3 },
  { name: 'AMI', mortalityRate: 3 },
  { name: 'HF', mortalityRate: 3 },
  { name: 'AAA', mortalityRate: 3 },
  { name: 'AF', mortalityRate: 3 },
  { name: 'TIA', mortalityRate: 3 },
  { name: 'stable angina', mortalityRate: 3 },
  { name: 'unstable angina', mortalityRate: 3 },
  { name: 'Stroke NOS', mortalityRate: 3 },
  { name: 'Stroke ischaemic', mortalityRate: 3 },
  { name: 'Subarachnoid hemorrhage', mortalityRate: 3 },
  { name: 'Stroke intracerebral', mortalityRate: 3 },
  { name: 'PAD', mortalityRate: 3 },
  { name: 'SCD', mortalityRate: 3 },
  { name: 'hypertension', mortalityRate: 3 },
];
