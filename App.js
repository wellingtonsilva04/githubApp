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
import Repo from "./src/screens/repo";
import ReposScreen from "./src/screens/ReposScreen";


export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <ReposScreen />

      </Provider>

    );
  }
}

