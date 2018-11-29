import React, {Component} from 'react';
import {StyleSheet,View,Text,ActivityIndicator} from 'react-native';


export default class FootComponent extends Component{

  render(){
    const {tipsContent,hasIndicator=true} = this.props;
    const  activityIndicator = hasIndicator?
    <ActivityIndicator
                    style = {styles.ActivityIndicator}
                    color ={'#FF6E6B'}
                />:null;
                
    return(
      <View style = {styles.footComponenet}>
          {activityIndicator}
          <Text style = {styles.loadText}>{tipsContent}</Text>
      </View>
      );
  }
}

const styles= StyleSheet.create({
    footComponenet:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
      marginBottom:10,
    },
    loadText:{
      color:'#FF6E6B'
  },
  ActivityIndicator:{
    marginBottom:10,
}
});