import React, {Component} from 'react';
import {StyleSheet,View,WebView,ActivityIndicator} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import ServiceDataQuery from '../service/ServiceDataQuery';


const API = 'http://v.juhe.cn/wepiao/query?key=153f4392852609b817d1dee0f6349e41';

export default class MoviePage extends Component{


  constructor(props){
    super(props);
    this.fetchQuery = new ServiceDataQuery();
    this.state = {
      h5Url:'',
      h5weixin:'',
      isLoading:true,
    }
  }
  componentDidMount(){
      this.loadData();
  }

  loadData(){
    this.fetchQuery.fetchGetRequest(API)
    .then((respone)=>{
      if(respone.reason ==='请求成功'){
        this.setState({
          h5Url:respone.result.h5url,
          h5weixin:respone.result.h5weixin,
          isLoading:false,
        });
      }else{
        alert(`请求出错${respone.reason}`);
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  render(){
    const {navigate,goBack} = this.props.navigation;
    const contentView = this.state.isLoading?
        <ActivityIndicator
          style = {styles.ActivityIndicator}
          size ="large"
          color ="#FF6E6B"/>:
        <WebView
          source = {{uri:this.state.h5Url}}
        />;
    return(
      <View style = {styles.root}>
        {/* <NavigationBar 
          title = {'在线电影'}
          leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
        /> */}
        {contentView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  ActivityIndicator:{
    flex:1,
    backgroundColor:'#FFFFFF',
  }
});