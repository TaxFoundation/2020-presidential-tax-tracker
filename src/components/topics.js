import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Topic from './topic';

const StyledTopicsList = styled.ul`
  list-style: none;
`;

const Topics = ({ topics }) => (
  <StyledTopicsList>
    topics.map((topic) => (<Topic topic={topic} />
    ))
  </StyledTopicsList>
);

Topics.propTypes = {
  topics: PropTypes.array,
};

export default Topics;
