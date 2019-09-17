import React, { PureComponent } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
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
                    onPress={this.props.onPressFilter}>
                    <Icon
                        name="filter"
                        type="antdesign"
                        size={20}
                    />
                </TouchableOpacity>
                <TextInput
                    style={ styles.TextInputPesquisar}
                    placeholder="pesquisar..."
                    onChangeText={this.props.onChangeText} />
                <TouchableOpacity
                    onPress={this.props.onPressBusca}
                >
                    <Icon
                        name="search"
                        type="octicon"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    TextInputPesquisar:{
        flex: 8,
        marginTop: 10, 
        marginHorizontal: 20, 
        borderRadius: 20, 
        backgroundColor: "#D8D8D8",
        padding: 10,
    }
});
