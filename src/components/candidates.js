import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Context } from '../state/reducer';
import Candidate from './candidate';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  display: grid;
  grid-gap: 0.5rem;
`;

const Candidates = ({ candidates, plans }) => {
  const { data } = useContext(Context);
  const activePlans = plans.filter(plan => data[plan.topic]);
  return (
    <Container>
      {candidates
        .sort((a, b) => {
          if (a.lastName > b.lastName) {
            return 1;
          }
          if (a.lastName < b.lastName) {
            return -1;
          }
          return 0;
        })
        .map(
          candidate =>
            data[candidate.id] && (
              <section key={`${candidate.id}-plans`}>
                <Candidate
                  candidate={candidate}
                  plans={activePlans.filter(
                    plan => plan.candidate === candidate.id
                  )}
                />
              </section>
            )
        )}
    </Container>
  );
};

export default Candidates;

Candidates.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.object),
  plans: PropTypes.arrayOf(PropTypes.object),
};
