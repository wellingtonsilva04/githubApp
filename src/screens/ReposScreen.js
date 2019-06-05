import React, { PureComponent } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from "react-redux";
import Header from "../components/Header"
import FoldList from '../components/FoldList';
import RepoItem from "../components/RepoItem";
import UserItem from "../components/UserItem";
import { setNome, buscar, aplicarFiltro } from '../redux/busca/action';
import ModalFiltros from '../components/ModalFiltros';
import { repoFilterSelector } from '../redux/repos/selectors';
import { filtrosToStateSelectos } from '../redux/busca/selectors';


class ReposScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false,
    };
  }

  _onChangeText = (text) => {
    this.props.dispatch(setNome(text));
  }

  _onPress = () => {
    this.props.dispatch(buscar());

  }
  _onPressFilter = () =>{
    this.setState({isVisibleModal: true});
  }

  closeModal = () => (this.setState({isVisibleModal: false}))

  aplicar = (filtros) =>{
    this.props.dispatch(aplicarFiltro(filtros))
    this.closeModal()
  }

  render() {
    const { repos, filtros,usuarios } = this.props

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
            data={usuarios}
            Item={UserItem}
          />
        </ScrollView>
        <ModalFiltros
          isVisible={this.state.isVisibleModal}
          aplicar={this.aplicar}
          close= {this.closeModal}
          filtros = {filtros}
        />
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
  const filtros = filtrosToStateSelectos(state);
  const repos = repoFilterSelector(state);
  const { usuarios } = state.usuariosReducer;
  return { nome, repos, usuarios ,filtros}
}
export default connect(mapStateToProps)(ReposScreen);