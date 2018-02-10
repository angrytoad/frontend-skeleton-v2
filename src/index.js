import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';

// Add this import:
import { AppContainer } from 'react-hot-loader';


const store = configureStore();
const history = createHistory();

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
registerServiceWorker();

// Render once
render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}