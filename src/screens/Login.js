import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from "react-native-elements";
import { setIsLogged } from '../redux/user/action';
import { connect } from 'react-redux';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20, }}>GithubApp</Text>
                <Input
                    placeholder='Username'
                    inputContainerStyle={{
                        borderWidth: 1, margin: 5,
                        borderRadius: 10,
                    }}
                    leftIconContainerStyle={{ marginRight: 10, }}
                    leftIcon={{ type: 'simple-line-icon', name: 'user' }} />
                <Input
                    placeholder='password'
                    inputContainerStyle={{
                        borderWidth: 1, margin: 5,
                        borderRadius: 10,
                    }}
                    leftIconContainerStyle={{ marginRight: 10, }}
                    leftIcon={{ type: 'simple-line-icon', name: 'lock' }} />
                <Button
                    containerStyle={{width: '90%',margin:20, }}
                    buttonStyle={{backgroundColor: "gray", borderRadius:10, }}
                    title="Login"
                    titleStyle={{fontSize:20}}
                    onPress={() => this.props.dispatch(setIsLogged(true))} />
            </View>
        );
    }
}



export default connect()(Login);