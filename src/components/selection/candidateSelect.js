import React from 'react';
import PropTypes from 'prop-types';

import Button from '../ui/button';

const CandidateSelect = ({ candidate }) => (
  <Button
    id={candidate.id}
  >{`${candidate.firstName} ${candidate.lastName}`}</Button>
);

CandidateSelect.propTypes = {
  candidate: PropTypes.object,
};

export default CandidateSelect;
