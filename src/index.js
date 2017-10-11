import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { IntlProvider } from 'react-intl-redux';


import App from './components/App';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';

import { reducer as intl } from './utils/intl';
import { reducers as restReducers } from './utils/rest';

import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import './index.css';

const reducer = combineReducers({
  intl,
  ...restReducers
});

const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router>
        <div>
          <PrivateRoute path="/" component={App}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    </IntlProvider>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
