import React from 'react';

import Option from './ConditionsSelectedOption';

interface Props {
  selectedOptions: string[];
  unselectOption: (option: string) => void;
}

export default function Selected({ selectedOptions, unselectOption }: Props) {
  if (selectedOptions.length === 0) return <></>;

  return (
    <>
      {selectedOptions.map((option: string) => {
        return <Option option={option} unselectOption={unselectOption} />;
      })}
    </>
  );
}
