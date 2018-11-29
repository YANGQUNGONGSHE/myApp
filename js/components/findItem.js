import React, {PureComponent} from 'react';
import {StyleSheet,Image,Text,TouchableOpacity} from 'react-native';

export default class FindItem extends PureComponent{

  render(){
    const {name,imUri,onClick} = this.props;
    return(
      <TouchableOpacity 
          style = {styles.root}
          onPress = {()=>onClick()}
          >
        <Image
          source={imUri}
        />
        <Text style = {styles.title}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    paddingTop:15,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    marginTop:10,
    fontSize:14,
    fontWeight:"500",
    color:'#505050',
  }
});