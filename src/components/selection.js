import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Candidates from './candidates';
import Topics from './topics';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
  padding: 4px;
`;

const Selection = ({ candidates, topics }) => (
  <Container>
    <Candidates candidates={candidates} />
    <Topics topics={topics} />
  </Container>
);

Selection.propTypes = {
  candidates: PropTypes.array,
  topics: PropTypes.array,
};

export default Selection;
