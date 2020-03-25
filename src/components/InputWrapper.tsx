import React, { useState } from 'react';
import styled from 'styled-components';

import { T } from './Typography';
import arrow from '../assets/images/down-arrow.svg';

interface Props {
  children: any;
  title: string;
}

export default function InputWrapper({ children, title }: Props) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const height = openDropDown ? 300 : 60;

  return (
    <Container
      onClick={() => setOpenDropDown(!openDropDown)}
      style={{ height }}
    >
      <Header>
        <T.P1>{title}</T.P1>
        <ArrowStyled src={arrow} />
      </Header>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2;
  border: 1px solid #ff7c03;
  transition: height 0.5s;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
`;

const ArrowStyled = styled.img`
  width: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
