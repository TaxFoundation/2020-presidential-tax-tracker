import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({ topic }) => <li>{topic.name}</li>;

Topic.propTypes = {
  topic: PropTypes.object,
};

export default Topic;
