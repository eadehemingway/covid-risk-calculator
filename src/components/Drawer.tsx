import React from 'react';
import styled from 'styled-components';

export default function Drawer() {
  return (
    <Container>
      <h1>How high is my risk?</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  border-right: 1px solid #ff7c03;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
