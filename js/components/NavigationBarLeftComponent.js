import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class NavigationBarLeftComponent extends Component{

    render(){
      const {tipsName = '返回',onClick} = this.props;
      return(
        <TouchableOpacity 
          style= {styles.root}
          onPress = {()=>onClick()}
          >
          <Image source = {require('../../resource/images/icon_back.png')}/>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
  root:{
    marginLeft:8,
  },
  tip:{
    textAlign:'center',

  }
});