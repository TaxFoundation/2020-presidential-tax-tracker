import React from 'react';

import Selection from './components/selection';
import candidates from './generatedData/candidates';
import topics from './generatedData/topics';

function App() {
  return (
    <div>
      <Selection candidates={candidates} topics={topics} />
    </div>
  );
}

export default App;
