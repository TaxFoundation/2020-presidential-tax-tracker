import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import topics from '../generatedData/topics.json';

const StyledPlan = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 20%) 1fr;
`;

const TopicsList = styled.ul`
  list-style: none;
  margin: 0 0.25rem;
  padding: 0;
`;

const TopicHeading = styled.h3`
  margin: 0 0 0.25rem;
`;

const ReadMore = styled.a`
  color: ${props => props.theme.tfBlue};
  text-decoration: none;
`;

const Plan = ({ candidate, plans }) => (
  <StyledPlan>
    <div>{candidate.name}</div>
    <TopicsList>
      {plans.map(plan => {
        const topic = topics.find(t => t.id === plan.topic);
        return (
          <li>
            <TopicHeading>{topic.name}</TopicHeading>
            <p>{plan.plan}</p>
            {plan.link && plan.link !== '' && (
              <ReadMore
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </ReadMore>
            )}
          </li>
        );
      })}
    </TopicsList>
  </StyledPlan>
);

export default Plan;

Plan.propTypes = {
  candidate: PropTypes.arrayOf(PropTypes.object),
  plans: PropTypes.arrayOf(PropTypes.object),
};
