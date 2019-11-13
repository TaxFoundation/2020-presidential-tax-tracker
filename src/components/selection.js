import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CandidatesSelect from './selection/candidatesSelect';
import Topics from './selection/topics';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  text-align: center;
`;

const Toggle = styled.button`
  background-color: ${props => props.theme.tfBlue};
  border: none;
  color: ${props => props.theme.white};
  cursor: pointer;
  font-size: 1.2rem;
  height: 100%;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const Selections = styled.div`
  display: ${props => (props.active ? 'grid' : 'none')};
  grid-gap: 1rem;
  padding: 1rem;

  @media screen and (min-width: 800px) {
    display: ${props => (props.active ? 'none' : 'grid')};
    grid-template: auto / repeat(2, 1fr);
  }
`;

const SectionHeading = styled.h2`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  margin: 0 0 1rem;
  text-align: center;
`;

const Selection = ({ candidates, topics }) => {
  const [showSelections, setShowSelections] = useState(false);

  return (
    <Container>
      <Toggle onClick={() => setShowSelections(!showSelections)}>
        Toggle Candidate and Topic Filters
      </Toggle>

      <Selections active={showSelections}>
        <section>
          <SectionHeading>Candidates</SectionHeading>
          <CandidatesSelect candidates={candidates} />
        </section>
        <section>
          <SectionHeading>Topics</SectionHeading>
          <Topics topics={topics} />
        </section>
      </Selections>
    </Container>
  );
};

Selection.propTypes = {
  candidates: PropTypes.array,
  topics: PropTypes.array,
};

export default Selection;
