import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default class NavigationBarRightComponent extends Component{

    render(){
      const {tipsName = '分类',onClick} = this.props;
      return(
        <TouchableOpacity 
            style = {styles.root}
            onPress = {()=>onClick()}
            >
          <Text style = {styles.tip}>
            {tipsName}
          </Text>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
  root:{
    marginRight:8,
  },
  tip:{
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:18,
  }
});