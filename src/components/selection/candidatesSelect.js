import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CandidateSelect from './candidateSelect';
import Button from '../ui/button';
import { StyledUnorderedList, StyledListItem } from '../ui/list';
import { alphabeticalSort } from '../../utilities';

const SectionHeading = styled.h3`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  margin: 0 0 1rem;
  text-align: center;
`;

const SelectionGroup = ({ heading, id, candidates }) => (
  <>
    <SectionHeading>{heading}</SectionHeading>
    <StyledUnorderedList>
      {candidates.map(candidate => (
        <StyledListItem key={`${candidate.id}-select`}>
          <CandidateSelect candidate={candidate} />
        </StyledListItem>
      ))}
      <StyledListItem>
        <Button id={id}>Select / Deselect All</Button>
      </StyledListItem>
    </StyledUnorderedList>
  </>
);

const CandidatesSelect = ({ candidates }) => (
  <>
    <SelectionGroup
      heading="Running"
      id="toggleRunningCandidates"
      candidates={candidates
        .filter(candidate => candidate.running)
        .sort((a, b) => alphabeticalSort(a.lastName, b.lastName))}
    />
    <SelectionGroup
      heading="Dropped Out"
      id="toggleDroppedCandidates"
      candidates={candidates
        .filter(candidate => !candidate.running)
        .sort((a, b) => alphabeticalSort(a.lastName, b.lastName))}
    />
  </>
);

SelectionGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.object),
};

CandidatesSelect.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.object),
};

export default CandidatesSelect;
