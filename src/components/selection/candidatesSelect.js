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

const CandidatesSelect = ({ candidates }) => (
  <>
    <SectionHeading>Running</SectionHeading>
    <StyledUnorderedList>
      {candidates
        .filter(candidate => candidate.running)
        .sort((a, b) => alphabeticalSort(a.lastName, b.lastName))
        .map(candidate => (
          <StyledListItem key={`${candidate.id}-select`}>
            <CandidateSelect candidate={candidate} />
          </StyledListItem>
        ))}
      <StyledListItem>
        <Button id="toggleRunningCandidates">Select / Deselect All</Button>
      </StyledListItem>
    </StyledUnorderedList>
    <SectionHeading>Dropped Out</SectionHeading>
    <StyledUnorderedList>
      {candidates
        .filter(candidate => !candidate.running)
        .sort((a, b) => alphabeticalSort(a.lastName, b.lastName))
        .map(candidate => (
          <StyledListItem key={`${candidate.id}-select`}>
            <CandidateSelect candidate={candidate} />
          </StyledListItem>
        ))}
      <StyledListItem>
        <Button id="toggleDroppedCandidates">Select / Deselect All</Button>
      </StyledListItem>
    </StyledUnorderedList>
  </>
);

CandidatesSelect.propTypes = {
  candidates: PropTypes.array,
};

export default CandidatesSelect;
