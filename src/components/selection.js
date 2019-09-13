import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Candidates from './candidates';
import Topics from './topics';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  border-bottom: 1px solid #bbb;
  padding: 8px;

  &:last-child {
    border: 0;
  }
`;

const SectionHeading = styled.h2`
  color: #333;
  font-family: sans-serif;
`;

const Selection = ({ candidates, topics }) => (
  <Container>
    <Section>
      <SectionHeading>Candidates</SectionHeading>
      <Candidates candidates={candidates} />
    </Section>
    <Section>
      <SectionHeading>Topics</SectionHeading>
      <Topics topics={topics} />
    </Section>
  </Container>
);

Selection.propTypes = {
  candidates: PropTypes.array,
  topics: PropTypes.array,
};

export default Selection;
