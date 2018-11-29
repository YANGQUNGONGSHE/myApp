import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';

export default class MyPage extends Component{
  render() {
    const {goBack,state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavigationBar
          title='我'
          style = {styles.navigationBar}
          leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
        />
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navigationBar:{
      backgroundColor:'#FF6E6B'
    }
  });