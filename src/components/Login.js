import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';

import { FormattedMessage, injectIntl } from 'react-intl';

import { Redirect } from 'react-router-dom';

import { getLocaleForUser, languages } from '../utils/intl';

import './Login.css';
import rest from '../utils/rest'

class Login extends Component {
  state = {
    username: '',
    password: '',
    redirectToReferrer: false
  };

  shouldComponentUpdate(props) {
    if (props.auth.data && props.auth.data.token && !this.state.redirectToReferrer) {
      this.setState({ redirectToReferrer: true })
      return false;
    }
    return true;
  }

  handleChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }
  
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    // const { intl: { formatMessage } } = this.props;

    const { auth } = this.props;
    const loading = auth ? auth.loading : false;
    const progress = loading ? <p>Loading...</p> : null;
    console.log('Render Login', redirectToReferrer, from)
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div className="login-form">
        <input  name="username"
                placeholder="Username"
                onChange={(event) => {
                  if (event.keyCode !== 13) {
                    this.handleChange(event, 'username');
                  }
                }}
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    this.props.doLogin({ username: this.state.username, password: this.state.password });
                  }
                }}>
        </input>
        <input  name="password"
                placeholder="Password"
                onChange={(event) => {
                  if (event.keyCode !== 13) {
                    this.handleChange(event, 'password');
                  }
                }}
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    this.props.doLogin({ username: this.state.username, password: this.state.password });
                  }
                }}>
        </input>
        <button onClick={() =>
                  this.props.doLogin({ username: this.state.username, password: this.state.password, app: 'editor'})
                }>
            <FormattedMessage id="Login" />
        </button>
        {progress}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  doLogin(creds) {
    dispatch(rest.actions.auth({}, { body: JSON.stringify(creds) }));

    const storedLocale = getLocaleForUser(creds.email);
    if (storedLocale && languages[storedLocale]) {
      dispatch(updateIntl({
        locale: storedLocale,
        messages: languages[storedLocale].translations,
      }));
    }
  }
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Login));
