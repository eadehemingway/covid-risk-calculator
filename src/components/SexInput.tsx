import React, { useState } from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import { T } from './Typography';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default function SexInput() {
  const [selectedSex, setSelectedSex] = useState();
  const sexArr = ['Male', 'Female'];
  return (
    <InputWrapper title="Sex">
      <T.P3> What was your assigned sex at birth?</T.P3>
      <RadioGroup onChange={(e: any) => setSelectedSex(e)} horizontal>
        {sexArr.map(s => {
          // tried to put this as its own component but the library didnt work when i did that
          const textColor = selectedSex === s ? '#ff7c03' : '#6a4019';
          return (
            <RadioButton value={s} rootColor="#6a4019" pointColor="#ff7c03">
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
