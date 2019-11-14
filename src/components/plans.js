import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Context } from '../state/reducer';
import Plan from './plan';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
`;

const Section = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding: 8px;

  &:last-child {
    border: 0;
  }
`;

const Plans = ({ candidates, plans }) => {
  const { data } = useContext(Context);
  const activePlans = plans.filter(plan => data[plan.topic]);
  return (
    <Container>
      {candidates.map(
        candidate =>
          data[candidate.id] && (
            <Section key={`${candidate.id}-plans`}>
              <Plan
                candidate={candidate}
                plans={activePlans.filter(
                  plan => plan.candidate === candidate.id
                )}
              />
            </Section>
          )
      )}
    </Container>
  );
};

export default Plans;

Plans.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.object),
  plans: PropTypes.arrayOf(PropTypes.object),
};