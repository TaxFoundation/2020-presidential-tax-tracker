import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CandidatesSelect from './selection/candidatesSelect';
import Topics from './selection/topics';
import { StyledButton } from './ui/button';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
`;

const Button = styled(StyledButton)`
  border: 1px solid ${props => props.theme.tfBlue};
  font-size: 1.2rem;
`;

const Selections = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 800px) {
    grid-template: auto / repeat(2, 1fr);
  }
`;

const SectionHeading = styled.h2`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  font-family: sans-serif;
  margin: 0 0 1rem;
  text-align: center;
`;

const Selection = ({ candidates, topics }) => {
  const [showSelections, setShowSelections] = useState(false);

  return (
    <Container>
      <Button
        active={showSelections}
        onClick={() => setShowSelections(!showSelections)}
      >
        {showSelections
          ? 'Hide Filters'
          : 'Click to Filter Candidates and Topics'}
      </Button>
      {showSelections && (
        <Selections>
          <section>
            <SectionHeading>Candidates</SectionHeading>
            <CandidatesSelect candidates={candidates} />
          </section>
          <section>
            <SectionHeading>Topics</SectionHeading>
            <Topics topics={topics} />
          </section>
        </Selections>
      )}
    </Container>
  );
};

Selection.propTypes = {
  candidates: PropTypes.array,
  topics: PropTypes.array,
};

export default Selection;
