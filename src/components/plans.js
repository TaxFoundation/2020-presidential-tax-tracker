import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../state/reducer';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
`;

const Section = styled.div`
  border-bottom: 1px solid #bbb;
  padding: 8px;

  &:last-child {
    border: 0;
  }
`;

const Plans = ({ candidates, plans }) => {
  const { data } = useContext(Context);
  return (
    <Container>
      {candidates.map(
        candidate =>
          data[candidate.id] && <Section>Candidate: {candidate.name}</Section>
      )}
    </Container>
  );
};

export default Plans;
