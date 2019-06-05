import React, { PureComponent } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from "react-redux";
import Header from "../components/Header"
import FoldList from '../components/FoldList';
import RepoItem from "../components/RepoItem";
import UserItem from "../components/UserItem";
import { setNome, buscar } from '../redux/busca/action';


class ReposScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onChangeText = (text) => {
    this.props.dispatch(setNome(text));
  }

  _onPress = () => {
    this.props.dispatch(buscar());

  }

  _onPressFilter = () => {

  }

  render() {
    const { repos } = this.props
    return (
      <View style={styles.container}>

        <Header
          onChangeText={this._onChangeText}
          onPressBusca={this._onPress}
          onPressFilter={this._onPressFilter}
        />
        <ScrollView>
          <FoldList
            nome="Repositórios"
            data={repos}
            Item={RepoItem}
          />

          <FoldList
            nome="Usuários"
            data={repos}
            Item={UserItem}
          />
        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

const mapStateToProps = state => {
  const { nome } = state.buscaReducer;
  const { repos } = state.reposReducer;
  const { usuarios } = state.usuariosReducer;
  console.log(nome);
  return { nome, repos, usuarios }
}
export default connect(mapStateToProps)(ReposScreen);