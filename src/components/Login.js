import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { Redirect } from 'react-router-dom';

import * as actions from './../actions/authActions'

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Input = styled.input`
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
`;

class Login extends Component {
  state = {
    username: '',
    password: '',
    redirectToReferrer: false
  };

  shouldComponentUpdate(props) {
    if (props.auth && props.auth.token && !this.state.redirectToReferrer) {
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

  login(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { username, password } = this.state;
    dispatch(actions.login(username, password))
  }
  
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    const { auth, intl } = this.props;
    const messages = intl.messages;
    const loading = auth ? auth.loading : false;
    console.log('Render Login', redirectToReferrer, from, auth)
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <Form noValidate autoComplete="off">
        <Input  name="username"
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
        </Input>
        <Input  name="password"
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
        </Input>
        <SubmitButton onClick={(e) =>
                  this.login(e)
                }>
            {loading ? messages["Loading"] : messages["Login"]}
        </SubmitButton>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default injectIntl(connect(mapStateToProps)(Login));
