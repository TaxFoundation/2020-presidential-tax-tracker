import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPlan = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Plan = ({ candidate, plans }) => (
  <StyledPlan>
    <div>{candidate.name}</div>
    <div>
      {plans.map(plan => (
        <p>{plan.plan}</p>
      ))}
    </div>
  </StyledPlan>
);

export default Plan;

Plan.propTypes = {
  candidate: PropTypes.arrayOf(PropTypes.object),
  plans: PropTypes.arrayOf(PropTypes.object),
};
