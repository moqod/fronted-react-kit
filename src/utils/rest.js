import axios from 'axios'

let apiHost = process.env.API_HOST || 'https://rws.mqd.me/api/';
let headers = {};

let token = localStorage.getItem('auth_token');
token = token ? token.trim().replace(/"/g, '') : token;
if (token) {
  headers = {
    'Authorization': 'Token ' + token
  }
}

const rest = axios.create({
  baseURL: apiHost,
  headers
});
rest.interceptors.response.use(null, function(error) {
  if (error.response.status === 401) {
    localStorage.removeItem('auth_token');
    window.location.reload();
  }
  return Promise.reject(error);
});

export default rest;