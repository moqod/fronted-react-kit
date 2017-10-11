import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect
} from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Component, loggedIn, ...rest } = this.props;
    console.log('Render Private Route', loggedIn)
    return (
      <Route {...rest} render={props => (
    loggedIn ? (
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
  loggedIn: !!state.auth.data.token,
});

export default connect(mapStateToProps)(PrivateRoute);