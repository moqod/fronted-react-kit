import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { auth } from './../reducers/authReducer';
var thunkMiddleware = require('redux-thunk').default

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

middlewares.push(thunkMiddleware);
const reducer = combineReducers({
  auth
});

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default store;