import React, { Component } from 'react';

import { StyleSheet, View, TouchableHighlight } from 'react-native';
 
export default class MyProject extends Component {

  constructor(){

    super();

    this.state={

      ColorHolder : '#00BCD4'

    }
  }

ChangeColorFunction=()=>
{

var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

this.setState({

  ColorHolder : ColorCode

})
}

  render() {
    return (
      <TouchableHighlight style={[styles.MainContainer, { backgroundColor: this.state.ColorHolder }]} onPress = { this.ChangeColorFunction }>
        <View>

        </View>
      </TouchableHighlight>



    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});