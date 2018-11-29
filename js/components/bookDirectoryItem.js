import React, {PureComponent} from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class BookDirectoryItem extends PureComponent{

  render(){
    const {id,catalog,onClick} = this.props;
    return(
      <TouchableOpacity 
        style = {styles.root}
        onPress = {()=>onClick()}
        >
        <Text style = {styles.title}>
          {catalog}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    padding:20,
    margin:1,
    backgroundColor:'#FFFFFF',
    borderWidth:0.5,
    borderRadius:2,
    borderColor:'#dddddd',
    shadowColor:'gray',
    elevation:2,
    shadowRadius:2,
    shadowOffset:{width:0.5,height:0.5},
  },
  title:{
      fontSize:16,
      color:'#505050',
      textAlign:'center',
      fontWeight:'bold',
  }
});