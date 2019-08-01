import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Candidate from './candidate';

const StyledCandidatesList = styled.ul`
  list-style: none;
`;

const Candidates = ({ candidates }) => (
  <StyledCandidatesList>
    {candidates.map(candidate => (
      <Candidate candidate={candidate} />
    ))}
  </StyledCandidatesList>
);

Candidates.propTypes = {
  candidates: PropTypes.array,
};

export default Candidates;
