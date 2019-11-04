import React from 'react';
import PropTypes from 'prop-types';

import Topic from './topic';
import { StyledUnorderedList, StyledListItem } from '../list';

const Topics = ({ topics }) => (
  <StyledUnorderedList>
    {topics.map(topic => (
      <StyledListItem key={`${topic.id}-select`}>
        <Topic topic={topic} />
      </StyledListItem>
    ))}
  </StyledUnorderedList>
);

Topics.propTypes = {
  topics: PropTypes.array,
};

export default Topics;
