import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CandidatesSelect from './selection/candidatesSelect';
import Topics from './selection/topics';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding: 8px;

  &:last-child {
    border: 0;
  }
`;

const SectionHeading = styled.h2`
  color: ${props => props.theme.color};
  font-family: sans-serif;
`;

const Selection = ({ candidates, topics }) => (
  <Container>
    <Section>
      <SectionHeading>Candidates</SectionHeading>
      <CandidatesSelect candidates={candidates} />
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
