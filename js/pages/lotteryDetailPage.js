import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';

export default class LotteryDetailPage extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const {goBack,state} = this.props.navigation;
    return(
      <View style = {styles.root}>
        <NavigationBar
          title = {state.params.lotteryName}
          leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});