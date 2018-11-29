import React, {PureComponent} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';

export default class FoodListItem extends PureComponent{
      constructor(props){
        super(props);
      }

      render(){
        const {albums,title,ingredients,burden,id,onClick} = this.props;
        return(
          <TouchableOpacity 
            style = {styles.root}
            onPress = {()=>onClick(id)}
            >
            <Image 
              style = {styles.image}
              source = {{uri:albums[0]}}
              resizeMode = 'cover'
            />
            <View style = {styles.titleContainer}>
              <Text style = {[styles.title,{letterSpacing:1}]} numberOfLines = {1}>{title}</Text>
              <Text style = {styles.ingredients} numberOfLines = {1}>{ingredients}</Text>
              <Text style = {styles.ingredients} numberOfLines = {1}>{burden}</Text>
            </View>
          </TouchableOpacity>
        );
      }
}

const styles = StyleSheet.create({
  root:{
    flexDirection:'row',
    flex:1,
    height:120,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    padding:20,
  },
  image:{
    flex:1,
  },
  titleContainer:{
    flex:2,
    marginLeft:20,
  },
  title:{
    fontSize:16,
    color:'#242424',
    fontWeight:'bold',
  },
  ingredients:{
    fontSize:12,
    color:'#848484',
    marginTop:10,
  }
});

