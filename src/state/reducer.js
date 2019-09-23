import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import candidates from '../generatedData/candidates.json';
import topics from '../generatedData/topics.json';

const initialState = {};
candidates.forEach(
  candidate => (initialState[candidate.id] = candidate.running)
);
topics.map(topic => (initialState[topic.id] = true));

const reducer = (state, action) => ({ ...state, [action.id]: action.value });

export const Context = createContext();

export const Provider = ({ children }) => {
  const [data, updateData] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ data, updateData }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.any,
};
