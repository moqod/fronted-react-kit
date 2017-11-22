import { createReducer } from 'redux-act';
import * as actions from '../actions/authActions';

const initialState = {
  token: null,
  loading: false,
  error: null,
}

export const auth = createReducer({
  [actions.startLogin]: (state) => {
    return {
      ...state,
      loading: true,
      error: null
    }
  },
  [actions.loginSuccess]: (state, payload) => {
    return {
      ...state,
      token: payload,
      loading: false
    }
  },
  [actions.loginError]: (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload
    }
  },
}, initialState);