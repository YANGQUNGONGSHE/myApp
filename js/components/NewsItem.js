import React, {PureComponent} from 'react';
import {StyleSheet,Image,Text,TouchableOpacity,View,Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default class NewsItem extends PureComponent{

  constructor(props){
    super(props);
  }

  render(){
    const {title,date,author_name,thumbnail_pic_s} = this.props.itemData;
    return(
      <TouchableOpacity 
        style = {styles.root}
        onPress = {()=> this.props.onClick()}
        >
        <View style = {styles.leftContainer}>
          <Text style = {[styles.title,{lineHeight:30}]} numberOfLines={2}>{title}</Text>
          <Text style = {styles.author}>{`${author_name} ${date}`}</Text>
        </View>
        <Image 
          style = {styles.cover}
          source = {{uri:thumbnail_pic_s}}
          resizeMode = 'cover'
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
  },
  leftContainer:{
    flex:3,
    marginRight:5,
  },
  title:{
    fontSize:16,
    color:'#242424',
    fontWeight:'bold',
  },
  author:{
    marginTop:10,
    fontSize:10,
    color:'#848484'
  },
  cover:{
    flex:1,
  }
});