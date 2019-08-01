import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Candidates from './candidates';
import Topics from './topics';

const Selection = ({ candidates, topics }) => (
  <div>
    <Candidates candidates={candidates} />
    <Topics topics={topics} />
  </div>
);

Selection.propTypes = {
  candidates: PropTypes.array,
  topics: PropTypes.array,
};

export default Selection;
