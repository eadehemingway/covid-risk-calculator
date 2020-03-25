import React from 'react';
import styled from 'styled-components';

import InputWrapper from './InputWrapper';
import { T } from './Typography';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

interface Props {
  sex: string;
  setSex: (sex: string) => void;
}

export default function SexInput({ sex, setSex }: Props) {
  const sexArr = ['Male', 'Female'];
  return (
    <InputWrapper title="Assigned sex at birth:">
      <RadioGroup onChange={(e: any) => setSex(e)} horizontal>
        {sexArr.map(s => {
          const textColor = sex === s ? '#ff7c03' : '#6a4019';
          return (
            <RadioButton
              value={s}
              rootColor="#6a4019"
              pointColor="#ff7c03"
              iconSize={20}
              iconInnerSize={10}
            >
              <P3Styled style={{ color: textColor }}>{s}</P3Styled>
            </RadioButton>
          );
        })}
      </RadioGroup>
    </InputWrapper>
  );
}

const P3Styled = styled(T.P3)`
  margin: 0;
`;
