import React, { PureComponent } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Icon, ButtonGroup, Input, Overlay } from "react-native-elements";
import { removeNonNumber } from "../utils/textUtils";
const size = 30;
const starIcon = () => <Icon size={size} name="star" type="antdesign" />;
const forkIcon = () => <Icon size={size} name="fork" type="antdesign" />;
const issueOpenIcon = () => <Icon size={size} name="issue-opened" type="octicon" />;

export default class ModalFiltros extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            numStar: "0",
            numFork: "0",
            numIssue: "0"
        };
    }
    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }

    onChangeTextStar = (text) => {
        const numStar = removeNonNumber(text);

        this.setState({ numStar });
    }

    onChangeTextFork = (text) => {
        const numFork = removeNonNumber(text);
        this.setState({ numFork });
    }

    onChangeTextIssue = (text) => {
        const numIssue = removeNonNumber(text);
        this.setState({ numIssue });

    }
    componetDidMount() {
        const { selectedIndex, numStar, numFork,numIssue } = this.props.filtros;
        this.setState({selectedIndex, numStar, numFork,numIssue});
    }
    aplicar = () =>{
        this.props.aplicar(this.state);
    }
    render() {
        const buttons = [{ element: starIcon }, { element: forkIcon }, { element: issueOpenIcon }]
        const { selectedIndex } = this.state
        return (
            <Overlay isVisible={this.props.isVisible} onBackdropPress={this.props.close}>
                <View style={{ padding: 10, marginHorizontal: 5, }}>
                    <Text> Ordenar </Text>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                    />

                    <Text> Filtrar </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Input
                            onChangeText={this.onChangeTextStar}
                            label={"Maior que"} leftIcon={starIcon}
                            keyboardType={"numeric"}
                            value={this.state.numStar} />
                        <Input
                            onChangeText={this.onChangeTextFork}
                            inputStyle={{ flex: 1 }}
                            leftIcon={forkIcon}
                            keyboardType={"numeric"}
                            value={this.state.numFork} />
                        <Input
                            onChangeText={this.onChangeTextIssue}
                            leftIcon={issueOpenIcon}
                            keyboardType={"numeric"}
                            value={this.state.numIssue} />
                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between', marginVertical: 20, }}>
                        <TouchableOpacity onPress={this.close}>
                            <Text style={{ fontSize: 20 }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.aplicar}>
                            <Text style={{ fontSize: 20 }}>Aplicar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Overlay>
        );
    }
}
