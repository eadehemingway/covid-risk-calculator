import React, { useState } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import * as TS from './types';

import UserInputsPanel from './components/UserInputsPanel';
import Right from './components/Right';

const App = () => {
  const [baseRate, setBaseRate] = useState(2);
  const [page, setPage] = useState();
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState('');
  const [conditions, setConditions] = useState<TS.Condition[]>([]);
  return (
    <Container>
      <UserInputsPanel
        setBaseRate={setBaseRate}
        setPage={setPage}
        age={age}
        setAge={setAge}
        sex={sex}
        setSex={setSex}
        conditions={conditions}
        setConditions={setConditions}
      />
      <Right
        baseRate={baseRate}
        page={page}
        setPage={setPage}
        age={age}
        sex={sex}
        conditions={conditions}
      />
    </Container>
  );
};

export default hot(App);

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
`;
