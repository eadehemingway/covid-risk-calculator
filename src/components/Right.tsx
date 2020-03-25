import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

export default function Right({ baseRate }) {
  const [relativeRisk, setRelativeRisk] = useState(2);
  const [page, setPage] = useState(1);

  function getVisualisation() {
    switch (page) {
      case 1:
        return (
          <PageOne
            baseRate={baseRate}
            relativeRisk={relativeRisk}
            page={page}
            setPage={setPage}
            setRelativeRisk={setRelativeRisk}
          />
        );
      case 2:
        return <PageTwo page={page} setPage={setPage} />;
      case 3:
        return <PageThree page={page} setPage={setPage} />;
    }
  }
  return <Container>{getVisualisation()}</Container>;
}

const Container = styled.div`
  display: flex;
  flex: 2.5;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
