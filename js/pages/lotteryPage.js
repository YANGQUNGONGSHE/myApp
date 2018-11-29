import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import LotteryItem from '../components/lotteryItem';
import ServiceDataQuery from '../service/ServiceDataQuery'; 

const API = 'http://apis.juhe.cn/lottery/types';

export default class LotteryPage extends Component{

  constructor(props){
    super(props);
    this.fetchQuery = new ServiceDataQuery();
    this.state = {
      data:[],
    }
  }

  componentDidMount(){
      this.loadData();
  }

  loadData(){
    this.fetchQuery.fetchGetRequest(API)
    .then((respone)=>{
      if(respone.error_code ==='0'){
            this.setState({
              data: respone.result,
            });
      }else{
          alert(`请求出错:${respone.reason}`);
      }
    }).catch((error)=>{
      console.log(error);
    })
  }
  render(){
    const {goBack,state,navigate} = this.props.navigation;
    return(
      <View style = {styles.root}>
        <NavigationBar 
          title = {state.params.title}
          leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
        />
        {
          this.state.data.map((data,index,arr)=> <LotteryItem key = {data.lottery_id} lotteryName ={data.lottery_name} remarks = {data.remarks} onClick = {()=>{
              navigate('LotteryDetailPage',{
                lotteryId:data.lottery_id,
                lotteryName:data.lottery_name,
              });
          }}/>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});