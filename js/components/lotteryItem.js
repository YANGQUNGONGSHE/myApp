import React, {PureComponent} from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class LotteryItem extends PureComponent{

  constructor(props){
    super(props);
  }

  render(){
    const {lotteryName,remarks,onClick} = this.props;
    return(
      <TouchableOpacity 
        style = {styles.root}
        onPress = {()=>onClick()}
        >
        <Text style = {styles.ttile}>{lotteryName}</Text>
        <Text style = {styles.tips}>{remarks}</Text>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  root:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
  },
  ttile:{
      fontSize:16,
      color:'#242424'
  },
  tips:{
    marginTop:10,
    fontSize:12,
    color:'#848484',
    fontWeight:'500',
  }
});