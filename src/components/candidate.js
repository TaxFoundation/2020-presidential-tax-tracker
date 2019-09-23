import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const Candidate = ({ candidate }) => (
  <Button id={candidate.id}>{candidate.name}</Button>
);

Candidate.propTypes = {
  candidate: PropTypes.object,
};

export default Candidate;
