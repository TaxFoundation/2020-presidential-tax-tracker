import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import topics from '../generatedData/topics.json';
import Images from '../images/Images';

const StyledPlan = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: minmax(120px, 20%) 1fr;
`;

const CandidateContainer = styled.div`
  align-content: center;
  display: grid;
  grid-gap: 0.5rem;
  grid-template: repeat(2, auto) / auto;
  justify-content: center;

  h3 {
    margin: 0;
    text-align: center;
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  max-width: 150px;
  width: 100%;
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
    <CandidateContainer>
      {Images[candidate.id] ? (
        <StyledImage
          src={Images[candidate.id]}
          alt={`Portrait of ${candidate.name}`}
        />
      ) : null}
      <h3>{candidate.name}</h3>
    </CandidateContainer>
    {plans.length ? (
      <TopicsList>
        {plans.map(plan =>
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
