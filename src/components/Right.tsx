import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextInVisualisation from './TextInVisualisation';
import Visualisation from './Visualisation';
import SliderPanel from './SliderPanel';

export default function Right() {
  const [page, setPage] = useState(1);
  return (
    <Container>
      {/* <TextInVisualisation /> */}
      <Visualisation page={page} setPage={setPage} />
      <SliderPanel />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2.5;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
