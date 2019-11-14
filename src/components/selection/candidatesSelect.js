import React from 'react';
import PropTypes from 'prop-types';

import CandidateSelect from './candidateSelect';
import Button from '../ui/button';
import { StyledUnorderedList, StyledListItem } from '../ui/list';
import { alphabeticalSort } from '../../utilities';

const CandidatesSelect = ({ candidates }) => (
  <StyledUnorderedList>
    {candidates
      .sort((a, b) => alphabeticalSort(a.lastName, b.lastName))
      .map(candidate => (
        <StyledListItem key={`${candidate.id}-select`}>
          <CandidateSelect candidate={candidate} />
        </StyledListItem>
      ))}
    <StyledListItem>
      <Button id="toggleCandidates">Select / Deselect All</Button>
    </StyledListItem>
  </StyledUnorderedList>
);

CandidatesSelect.propTypes = {
  candidates: PropTypes.array,
};

export default CandidatesSelect;
