import React from 'react';
import styled from 'styled-components';

import { T } from './Typography';

interface Props {
  children: any;
  title: string;
}

export default function InputWrapper({ children, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

const Container = styled.div`
  flex: 2;
  border-top: 1px solid #ff7c03;
  transition: height 0.5s;
  padding: 10px;
`;

const Title = styled(T.P1)`
  margin: 0;
`;

interface ArrowStyled {
  dropDownOpen: boolean;
}

const ArrowStyled = styled.img`
  width: 20px;
  transition: transform 1s;
  ${({ dropDownOpen }: ArrowStyled) =>
    dropDownOpen ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'}
`;
