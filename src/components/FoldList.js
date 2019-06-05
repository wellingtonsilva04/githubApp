import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from "react-native-elements";

export default class FoldList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            folded: true
        };
    }
    renderFlatList = () => {
        const {data, Item, onPressItem } = this.props;
        if (this.state.folded) {
            return null
        }
        return <FlatList
            data={data}
            keyStractor={(item) => item.id}
            renderItem={({ item }) => <Item item={item} onPressItem={onPressItem} />}
        />
    }
    render() {
        const { folded } = this.state;
        const foldedStyle = folded ? { width: 0, heigth: 0 } : {}
        const { nome } = this.props;
        return (
            <View style={{ minHeight: 50, }}>
                <TouchableOpacity onPress={() => this.setState({ folded: !folded })}>
                    <View style={{ flexDirection: "row", alignItems: 'center', padding: 10, }}>
                        <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 20, marginRight: 10, color: "black" }}>
                            {nome}
                        </Text>
                        <Icon
                            name={folded ? "triangle-down" : "triangle-up"}
                            type="octicon"
                        />

                    </View>
                </TouchableOpacity>
                {this.renderFlatList()}
            </View>
        );
    }
}
