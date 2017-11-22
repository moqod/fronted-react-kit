import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import logo from '../assets/logo.svg';

class App extends Component {

  logout() {
    localStorage.removeItem('auth_token');
    window.location.reload();
  }

  render() {
    return (
      <header className="App-header">
        <h1>Welcome to React</h1>
        <button onClick={() => this.logout()}>Logout</button>
      </header>
    );
  }
}

export default injectIntl(App);
