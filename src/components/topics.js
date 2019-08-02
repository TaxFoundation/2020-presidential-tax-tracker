import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Topic from './topic';
import { StyledUnorderedList, StyledListItem } from './list';

const Topics = ({ topics }) => (
  <StyledUnorderedList>
    {topics.map(topic => (
      <StyledListItem>
        <Topic topic={topic} />
      </StyledListItem>
    ))}
  </StyledUnorderedList>
);

Topics.propTypes = {
  topics: PropTypes.array,
};

export default Topics;
