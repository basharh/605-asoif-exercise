import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import App from './containers/App';
import app from './reducers/app';

require('../sass/all.scss');

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
  app,
  router: routerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger, historyMiddleware));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
