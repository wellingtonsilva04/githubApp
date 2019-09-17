/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from "./src/redux/createStore";
import AppNavigator from "./src/routers";
import Router from './src/config/Router';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <Router />

      </Provider>

    );
  }
}

