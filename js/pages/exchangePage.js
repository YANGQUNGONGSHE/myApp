import React, {Component} from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native';
import NavigationBar from '../utils/NavigationBar';

export default class ExchangePage extends Component{

  render(){
    return(
      <View style = {styles.root}>
        <Text>ExchangePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});