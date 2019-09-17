import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import Login from '../screens/Login';
import Me from '../screens/Me';
import { connect } from 'react-redux';
import { AppStack, AuthStack } from '../routers';

class Router extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {isLogged} = this.props;
    return (
      isLogged ? <AppStack /> : <AuthStack />
    );
  }
}

const mapStateToProps = state => {
    const {isLogged} = state.userReducer;
    return {isLogged};
}
export default connect(mapStateToProps)(Router);