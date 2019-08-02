import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Candidate from './candidate';
import { StyledUnorderedList, StyledListItem } from './list';

const Candidates = ({ candidates }) => (
  <StyledUnorderedList>
    {candidates.map(candidate => (
      <StyledListItem>
        <Candidate candidate={candidate} />
      </StyledListItem>
    ))}
  </StyledUnorderedList>
);

Candidates.propTypes = {
  candidates: PropTypes.array,
};

export default Candidates;
