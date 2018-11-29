import React, {Component} from 'react';
import {StyleSheet,View,Modal,Text,ScrollView,Image} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';


export default class BookDetailPage extends Component{
      
  constructor(props){
    super(props);
  }
  render(){
    const {state,goBack} = this.props.navigation;
    return(
      <View style = {styles.root}>
        <NavigationBar
            title = {'书籍详情'}
            leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
        />
        <ScrollView style = {styles.container}>
          <View style = {styles.topContainer}>
            <View style = {styles.titleContainer}>
              <Text style = {styles.title} selectable={true}>{`书名:  ${state.params.bookData.title}`}</Text>
              <Text style = {styles.title} selectable={true}>{`分类:  ${state.params.bookData.catalog}`}</Text>
              <Text style = {styles.title} selectable={true}>{`标签:  ${state.params.bookData.tags}`}</Text>
            </View>
            <Image style = {styles.cover} source = {{uri:state.params.bookData.img}}/>
          </View>
          <Text style = {[styles.subTitle,{lineHeight:25}]} selectable={true}>{state.params.bookData.sub2}</Text>
          <Text style = {[styles.subTitle]} selectable={true}>{`阅读量:  ${state.params.bookData.reading}`}</Text>
          <Text style = {[styles.subTitle]} selectable={true}>{`发布时间:  ${state.params.bookData.bytime}`}</Text>
          <View style = {styles.selling}>
            <Text style = {[styles.subTitle2]}>{'在售商城'}</Text>
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
  container:{
      marginTop:20,
      marginLeft:10,
      marginRight:10,
  },
  topContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  cover:{
    flex:1,
    height:120,
  },
  titleContainer:{
    flex:3,
    marginRight:5,
  },
  title:{
    marginTop:10,
    fontSize:16,
    color:'#242424',
    fontWeight:'500',
  },
  subTitle:{
    marginTop:20,
    color:'#242424',
    fontSize:14,
  },
  subTitle2:{
    color:'#242424',
    fontSize:16,
  },
  selling:{
    flexDirection:'row',
    marginTop:15,
    marginBottom:15,
  }
});