import React from 'react';
import PropTypes from 'prop-types';

import Topic from './topic';
import { StyledUnorderedList, StyledListItem } from '../ui/list';
import Button from '../ui/button';

const Topics = ({ topics }) => (
  <StyledUnorderedList>
    {topics.map(topic => (
      <StyledListItem key={`${topic.id}-select`}>
        <Topic topic={topic} />
      </StyledListItem>
    ))}
    <StyledListItem>
      <Button id="toggleTopics">Select / Deselect All</Button>
    </StyledListItem>
  </StyledUnorderedList>
);

Topics.propTypes = {
  topics: PropTypes.array,
};

export default Topics;
