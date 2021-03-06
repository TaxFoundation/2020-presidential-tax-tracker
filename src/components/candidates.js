import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Context } from '../state/reducer';
import Candidate from './candidate';
import { alphabeticalSort } from '../utilities';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  display: grid;
  grid-gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media print {
    display: block;
  }
`;

const Candidates = ({ candidates, plans }) => {
  const { data } = useContext(Context);
  const activePlans = plans.filter(plan => data[plan.topic]);
  return (
    <Container>
      {candidates
        .sort((a, b) => alphabeticalSort(a.lastName, b.lastName))
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
