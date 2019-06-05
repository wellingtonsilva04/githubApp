import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

export default class UserItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {item} = this.props;
    return (
      <View>
        <Text> UserItem </Text>
      </View>
    );
  }
}
