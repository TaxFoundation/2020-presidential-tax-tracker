import React from 'react';

import Candidate from './candidate';

const Candidates = ({ candidates }) => (
  <ul>
    canditates.map((candidate) => (<Candidate candidate={candidate} />
    ))
  </ul>
);

export default Candidates;
