import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Context } from '../state/reducer';

const StyledButton = styled.button`
  border: ${props => (props.active ? '1px solid #0094ff' : '1px solid #bbb')};
  border-radius: 4px;
  background-color: ${props => (props.active ? '#0094ff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#333')};
  font-size: 14px;
  padding: 4px;

  &:hover {
    background-color: #fff;
    border: 1px solid #0094ff;
    color: #0094ff;
  }
`;

const Button = ({ id, children }) => {
  const { data, updateData } = useContext(Context);
  const active = data[id];
  return (
    <StyledButton
      active={active}
      onClick={() => updateData({ id, value: !active })}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
};

export default Button;
