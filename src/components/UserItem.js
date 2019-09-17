import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';

export default class UserItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { login, avatar_url } = this.props.item;
    return (
      <View >
        <Image source={{ uri: avatar_url }}
          style={{ width: 70, height: 70 }} />
        <Text> {login} </Text>
      </View>
    );
  }
}
