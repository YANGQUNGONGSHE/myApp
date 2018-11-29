import React, {PureComponent} from 'react';
import {StyleSheet,Text,TouchableOpacity,Image} from 'react-native';

export default class BookDetailsItem extends PureComponent{

  render(){
    const {title,img,onClick} = this.props;
    return(
      <TouchableOpacity 
        style = {styles.root}
        onPress = {()=>onClick()}
        >
        <Image
          style = {styles.cover}
          source = {{uri:img}}
        />
        <Text style = {styles.bookName} numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    height:150,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:15,
  },
  bookName:{
    marginTop:20,
    fontSize:14,
    color:'#242424',
    fontWeight:'500',
  },
  cover:{
    width:80,
    height:90,
  }
});
