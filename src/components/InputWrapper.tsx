import React, { useState } from 'react';
import styled from 'styled-components';

import { T } from './Typography';
import arrow from '../assets/images/down-arrow.svg';

interface Props {
  children: any;
  title: string;
}

export default function InputWrapper({ children, title }: Props) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const height = dropDownOpen ? 300 : 60;

  return (
    <Container style={{ height }}>
      <Header onClick={() => setDropDownOpen(!dropDownOpen)}>
        <Title>{title}</Title>
        <ArrowStyled src={arrow} dropDownOpen={dropDownOpen} />
      </Header>
      {children}
    </Container>
  );
}

const Container = styled.div`
  flex: 2;
  border: 1px solid #ff7c03;
  transition: height 0.5s;
  padding: 10px;
  overflow: hidden;
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  align-items: center;
  margin-bottom: 50px;
`;
