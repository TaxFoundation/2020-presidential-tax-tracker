import React from 'react';

import { Provider } from './state/reducer';
import Selection from './components/selection';
import Plans from './components/plans';
import candidates from './generatedData/candidates';
import topics from './generatedData/topics';

function App() {
  return (
    <div>
      <Provider>
        <Selection candidates={candidates} topics={topics} />
        <Plans candidates={candidates} topics={topics} />
      </Provider>
    </div>
  );
}

export default App;
