import React from 'react';
import PropTypes from 'prop-types';

import CandidateSelect from './candidateSelect';
import { StyledUnorderedList, StyledListItem } from '../ui/list';

const CandidatesSelect = ({ candidates }) => (
  <StyledUnorderedList>
    {candidates.map(candidate => (
      <StyledListItem key={`${candidate.id}-select`}>
        <CandidateSelect candidate={candidate} />
      </StyledListItem>
    ))}
  </StyledUnorderedList>
);

CandidatesSelect.propTypes = {
  candidates: PropTypes.array,
};

export default CandidatesSelect;
