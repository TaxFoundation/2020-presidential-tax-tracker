import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Context } from '../../state/reducer';

const StyledButton = styled.button`
  border: ${props =>
    props.active
      ? `1px solid ${props.theme.tfBlue}`
      : `1px solid ${props.theme.borderColor}`};
  border-radius: 4px;
  background-color: ${props =>
    props.active ? props.theme.tfBlue : props.theme.white};
  color: ${props => (props.active ? props.theme.white : props.theme.color)};
  cursor: pointer;
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: 14px;
  padding: 4px;

  &:hover {
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.tfBlue};
    color: ${props => props.theme.tfBlue};
  }
`;

const Button = ({ id, children }) => {
  const { data, updateData } = useContext(Context);
  const directUpdate = !!data[id];

  return (
    <StyledButton
      active={directUpdate ? data[id] : false}
      onClick={() =>
        directUpdate ? updateData({ id, value: !data[id] }) : updateData({ id })
      }
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
};

export { Button as default, StyledButton };
