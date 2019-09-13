import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Provider } from './state/reducer';
import Theme from './Theme';
import Selection from './components/selection';
import Plans from './components/plans';
import candidates from './generatedData/candidates';
import topics from './generatedData/topics';
import plans from './generatedData/plans';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: ${props => props.theme.fontFamilies.lato};
    font-size: ${props => props.theme.fontSize};
    font-weight: ${props => props.theme.fontWeight};
    height: 100%;
    line-height: 1.6;
  }
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider>
        <GlobalStyle />
        <Selection candidates={candidates} topics={topics} />
        <Plans candidates={candidates} topics={topics} plans={plans} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
