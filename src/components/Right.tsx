import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextInVisualisation from './TextInVisualisation';
import Visualisation from './Visualisation';
import SliderPanel from './SliderPanel';

export default function Right({ baseRate }) {
  const [relativeRisk, setRelativeRisk] = useState(2);
  const [page, setPage] = useState(1);
  return (
    <Container>
      <Visualisation
        baseRate={baseRate}
        relativeRisk={relativeRisk}
        page={page}
        setPage={setPage}
        setRelativeRisk={setRelativeRisk}
      />
      <SliderPanel
        relativeRisk={relativeRisk}
        setRelativeRisk={setRelativeRisk}
      />
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
