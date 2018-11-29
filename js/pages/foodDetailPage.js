import React, {Component} from 'react';
import {StyleSheet,View,ScrollView,Image,Text,Dimensions} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import NavigationBarRightComponent from '../components/NavigationBarRightComponent';

const devicewidth = Dimensions.get('window').width;
const coverwidth = devicewidth/3;

export default class FoodDetailPage extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const{goBack,state} = this.props.navigation;
    const itemData = state.params.foodData;
    return(
      <View style = {styles.root}>
        <NavigationBar
          title = {itemData.title}
          leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
        />
        <ScrollView>
          <View style = {styles.topContent}>
            <Image style = {styles.cover} source = {{uri:itemData.albums[0]}} resizeMode = 'cover'/>
            <Text style = {[styles.foodTitle,{lineHeight:100,letterSpacing:1}]}>{itemData.title} </Text>
          </View>
          <View style = {styles.detailContent}>
            <Text style = {styles.describeText}>{'标签'}</Text>
            <Text style = {[styles.detailText,{lineHeight:30,letterSpacing:1}]}>{itemData.tags}</Text>
            <Text style = {styles.describeText}>{'心得'}</Text>
            <Text style = {[styles.detailText,{lineHeight:30}]}>{itemData.imtro}</Text>
            <Text style = {styles.describeText}>{'食材'}</Text>
            <Text style = {[styles.detailText,{lineHeight:30}]}>{itemData.ingredients}</Text>
            <Text style = {styles.describeText}>{'调料'}</Text>
            <Text style = {[styles.detailText,{lineHeight:30}]}>{itemData.burden}</Text>
            <Text style = {styles.describeText}>{'做法'}</Text>
            {itemData.steps.map((data,index,arr)=> <View  style = {styles.stepContainer} key = {data.step}>
                <Text style = {[styles.detailText,{lineHeight:30 ,letterSpacing:3}]} >{data.step}</Text>
                <Image style = {styles.stepIm} source = {{uri:data.img}} resizeMode = 'cover'/>
            </View>)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  topContent:{
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    padding:10,
  },
  detailContent:{
    backgroundColor:'#FFFFFF',
    marginTop:10,
    padding:10,
  },
  cover:{
    flex:1,
  },
  rightTopContent:{
    flex:2,
    marginLeft:20,
  },
  foodTitle:{
    fontSize:18,
    fontWeight:'bold',
    color:'#242424',
    marginLeft:15,
    flex:2,
  },
  describeText:{
    fontSize:16,
    fontWeight:'bold',
    color:'#242424',
    marginTop:10,
  },
  detailText:{
    fontSize:14,
    fontWeight:'300',
    color:'#242424',
  },
  stepContainer:{
    flex:1,
    alignItems:'center',
    marginVertical:5,
  },
  stepIm:{
    width:coverwidth,
    height:coverwidth,
  }
});