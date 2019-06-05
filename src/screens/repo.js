import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setRepos } from '../redux/repos/action';



class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
      this.props.dispatch(setRepos("sss"))
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}


const mapStateToProps = state => {const {repos} = state.reposReducer
console.log(repos);
return {repos}}
export default connect(mapStateToProps)(Repo);