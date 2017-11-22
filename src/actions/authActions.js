import { createAction } from 'redux-act';
// import rest from '../utils/rest'
// import axios from 'axios';

export const startLogin = createAction('start login');
export const loginSuccess = createAction('login success');
export const loginError = createAction('login error');
export function login(login, password) {
  return function (dispatch) {
    dispatch(startLogin());
    // return rest.post('/login/', {username: login, password: password}).then((res) => {
    //   localStorage.setItem('auth_token', res.data.token);
    //   axios.defaults.headers.common['Authorization'] = 'Token ' + res.data.token;
    //   dispatch(loginSuccess(res.data.token))
    // }).catch(err => {
    //   console.error('Error while save part', err)
    //   dispatch(loginError(err))
    // })
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        let token = "sucessfullauthenticationexample"
        localStorage.setItem('auth_token', token);
        dispatch(loginSuccess(token))
      }, 2000)
    })
  };
}