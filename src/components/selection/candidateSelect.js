import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

const CandidateSelect = ({ candidate }) => (
  <Button id={candidate.id}>{candidate.name}</Button>
);

CandidateSelect.propTypes = {
  candidate: PropTypes.object,
};

export default CandidateSelect;
