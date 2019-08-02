import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const Topic = ({ topic }) => (
  <li>
    <Button id={topic.id}>{topic.name}</Button>
  </li>
);

Topic.propTypes = {
  topic: PropTypes.object,
};

export default Topic;
