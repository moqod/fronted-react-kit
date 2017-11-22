import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect
} from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Component, loggedIn, ...rest } = this.props;
    let token = localStorage.getItem('auth_token');
    token = token ? token.trim().replace(/"/g, '') : token;
    console.log('Private route', token, loggedIn)
    return (
      <Route {...rest} render={props => (
    (loggedIn || token) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);