import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";

export default class RepoItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { item } = this.props;
        return (
            <View style={{ flex: 1 ,flexDirection: 'row', padding: 5,}}>
                <Text style={{ flex: 1, marginRight: 2, }}>{item.name}</Text>
                <View style={{flex: 1, flexDirection: 'row',}}>
                    <Icon
                        name="star"
                        type="antdesign"
                    />
                    <Text style={styles.dadosNumericos}>{item.stargazers_count}</Text>
                    <Icon
                        name="fork"
                        type="antdesign"
                    />

                    <Text style={styles.dadosNumericos}>{item.forks_count}</Text>
                    <Icon
                        name="issue-opened"
                        type="octicon"
                    />
                    <Text style={styles.dadosNumericos}>{item.open_issues_count} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dadosNumericos: { flex: 1,marginHorizontal: 5 }
});
