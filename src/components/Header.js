import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                onPress = {this.props.onPressFilter}>
                    <Icon
                        name="filter"
                        type="antdesign"
                        size = {20}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{ flex: 8, marginLeft: 10, }}
                    placeholder="Nome usuário"
                    onChangeText={this.props.onChangeText} />
                <TouchableOpacity
                    onPress={this.props.onPressBusca}
                >
                    <Text>buscar</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
});
