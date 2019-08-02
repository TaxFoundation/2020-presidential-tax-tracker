import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const Candidate = ({ candidate }) => (
  <li>
    <Button id={candidate.id}>{candidate.name}</Button>
  </li>
);

Candidate.propTypes = {
  candidate: PropTypes.object,
};

export default Candidate;
