import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const Topic = ({ topic }) => <Button id={topic.id}>{topic.name}</Button>;

Topic.propTypes = {
  topic: PropTypes.object,
};

export default Topic;
