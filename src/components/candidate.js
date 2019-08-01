import React from 'react';
import PropTypes from 'prop-types';

const Candidate = ({ candidate }) => <li>{candidate.name}</li>;

Candidate.propTypes = {
  candidate: PropTypes.object,
};

export default Candidate;
