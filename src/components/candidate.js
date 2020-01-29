import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import topics from '../generatedData/topics.json';
import Images from '../images/Images';
import ExternalLink from '../images/external-link.svg';

const StyledCandidate = styled.div`
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.3);
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  page-break-inside: avoid;

  @media screen and (min-width: 600px) {
    grid-template-columns: minmax(120px, 20%) 1fr;
  }
`;

const Portrait = styled.div`
  text-align: center;

  h3 {
    margin: 0;
    text-align: center;
  }

  @media print {
    border-bottom: 2px solid ${props => props.theme.borderColor};
    text-align: left;

    h3 {
      margin: 0;
      text-align: left;
    }
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  filter: ${props => (props.active ? 'none' : 'grayscale(100%)')};
  margin: 0 auto;
  max-width: 150px;
  width: 100%;

  @media print {
    display: none;
  }
`;

const ParticularPlan = styled.div`
  border-left: 2px solid ${props => props.theme.tfBlue};
  margin: 0.75rem 0;
  padding-left: 1rem;
`;

const TopicsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Topic = styled.li`
  margin: 0 0 1rem;
  page-break-inside: avoid;

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

  &::after {
    background-image: ${props =>
      props.href.includes('taxfoundation.org') ? '' : `url(${ExternalLink})`};
    content: '';
    display: inline-block;
    height: 0.8rem;
    margin-left: 0.5rem;
    width: 0.8rem;
  }

  @media print {
    display: none;
  }
`;

const Candidate = ({ candidate, plans }) => {
  const image = Images.find(img => img.id === candidate.id);
  const attribution =
    image &&
    `Portrait of ${candidate.firstName} ${candidate.lastName} by ${image.attribution}`;
  return (
    <StyledCandidate>
      <Portrait>
        {image ? (
          <StyledImage
            src={image.image}
            alt={attribution}
            active={candidate.running}
          />
        ) : null}
        <h3>{`${candidate.firstName} ${candidate.lastName}`}</h3>
      </Portrait>
      {plans.length ? (
        <TopicsList>
          {topics.map(
            topic =>
              plans.some(p => p.topic === topic.id) && (
                <Topic key={`${candidate.id}-${topic.id}`}>
                  <TopicHeading>{topic.name}</TopicHeading>
                  {plans
                    .filter(p => p.topic === topic.id)
                    .map((plan, i) => (
                      <ParticularPlan
                        key={`${candidate.id}-${topic.id}-plan${i}`}
                      >
                        {plan.plan.split(/\n/).map((s, j) => (
                          <TopicDescription
                            key={`${candidate.id}-${topic.id}-plan${i}-p${j}`}
                          >
                            {s}
                          </TopicDescription>
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
                      </ParticularPlan>
                    ))}
                </Topic>
              )
          )}
        </TopicsList>
      ) : (
        <p>Sorry, no plans match these topics for this candidate.</p>
      )}
    </StyledCandidate>
  );
};

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.object,
  plans: PropTypes.arrayOf(PropTypes.object),
};
