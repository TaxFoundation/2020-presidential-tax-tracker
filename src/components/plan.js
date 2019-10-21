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
  margin: 0;
  padding: 0;
`;

const Topic = styled.li`
  margin: 0 0 1rem;

  &:last-child {
    margin: 0;
  }
`;

const TopicHeading = styled.h3`
  margin: 0 0 0.25rem;
`;

const TopicDescription = styled.p`
  margin: 0;
`;

const ReadMore = styled.a`
  color: ${props => props.theme.tfBlue};
  text-decoration: none;
`;

const Plan = ({ candidate, plans }) => (
  <StyledPlan>
    <div>{candidate.name}</div>
    {plans.length ? (
      <TopicsList>
        {plans
          .sort(
            (a, b) =>
              topics.find(t => t.id === a.topic).order >
              topics.find(t => t.id === b.topic).order
          )
          .map(plan =>
            topics
              .filter(t => t.id === plan.topic)
              .map(topic => (
                <Topic key={`${candidate.id}-${topic.id}`}>
                  <TopicHeading>{topic.name}</TopicHeading>
                  {plan.plan.split(/\n/).map(s => (
                    <TopicDescription>{s}</TopicDescription>
                  ))}
                  {plan.link && plan.link !== '' && (
                    <ReadMore
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </ReadMore>
                  )}
                </Topic>
              ))
          )}
      </TopicsList>
    ) : (
      <p>Sorry, no plans match these topics for this candidate.</p>
    )}
  </StyledPlan>
);

export default Plan;

Plan.propTypes = {
  candidate: PropTypes.object,
  plans: PropTypes.arrayOf(PropTypes.object),
};
