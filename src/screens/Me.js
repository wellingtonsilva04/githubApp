import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { connect } from 'react-redux';
import { setIsLogged } from '../redux/user/action';

 class Me extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Text> Me </Text>
                <Button
                    containerStyle={{ width: '30%', margin: 20, }}
                    buttonStyle={{ backgroundColor: "gray", borderRadius: 10, }}
                    title="Logout"
                    titleStyle={{ fontSize: 20 }}
                    onPress={() => this.props.dispatch(setIsLogged(false))}
                />
            </View>
        );
    }
}


export default connect()(Me);