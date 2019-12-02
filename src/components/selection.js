import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import useComponentSize from '@rehooks/component-size';
import styled from 'styled-components';

import CandidatesSelect from './selection/candidatesSelect';
import Topics from './selection/topics';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  text-align: center;
`;

const Toggle = styled.button`
  background-color: ${props => props.theme.tfBlue};
  border: none;
  color: ${props => props.theme.white};
  cursor: pointer;
  font-size: 1.2rem;
  height: 100%;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const Selections = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
`;

const SectionHeading = styled.h2`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  margin: 0 0 1rem;
  text-align: center;
`;

const Selection = ({ candidates, topics }) => {
  const [showSelections, setShowSelections] = useState(false);
  const containerRef = useRef(null);
  const selectionsRef = useRef(null);
  const { width } = useComponentSize(containerRef);
  const { height } = useComponentSize(selectionsRef);

  useEffect(() => {
    if (width >= 800) setShowSelections(true);
  }, [width]);

  const handleToggle = () => setShowSelections(!showSelections);

  const props = useSpring({
    height: showSelections ? height : 0,
  });

  return (
    <Container ref={containerRef}>
      <Toggle onClick={handleToggle}>Toggle Candidate and Topic Filters</Toggle>
      <animated.div
        style={{
          ...props,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Selections ref={selectionsRef}>
          <section>
            <SectionHeading>Candidates</SectionHeading>
            <CandidatesSelect candidates={candidates} />
          </section>
          <section>
            <SectionHeading>Topics</SectionHeading>
            <Topics topics={topics} />
          </section>
        </Selections>
      </animated.div>
    </Container>
  );
};

Selection.propTypes = {
  candidates: PropTypes.array,
  topics: PropTypes.array,
};

export default Selection;
