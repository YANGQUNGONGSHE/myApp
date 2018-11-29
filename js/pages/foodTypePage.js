import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import NavigationBarRightComponent from '../components/NavigationBarRightComponent';
import ScrollableTabView, { ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view';
import ServiceDataQuery from '../service/ServiceDataQuery';
import FoodListDataPage from './foodListDataPage';

const API = 'https://apis.juhe.cn/cook/category?key=8711871bb184a9cec6be2ec74393d2ee';

export default class FoodTypePage extends Component{

  constructor(props){
    super(props);
    this.fetchQuery = new ServiceDataQuery();
    this.state = {
      foodTitleData:[],
    }
  }

  componentDidMount(){
      this.loadData();
  }

  loadData(){
    this.fetchQuery.fetchGetRequest(API)
    .then((respone)=>{
      if(respone.resultcode ==='200'){
            this.setState({
              foodTitleData:respone.result,
            });
      }else{
          alert(`请求出错:${respone.reason}`);
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  render(){
    const {goBack,state} = this.props.navigation;
    return(
      <View style = {styles.root}>
        <NavigationBar
          title = {'菜谱大全'}
          leftButton = {<NavigationBarLeftComponent onClick = {()=>{
            goBack();
          }}/>}
        />
        <ScrollableTabView
          tabBarPosition='top'
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar/>}
          tabBarBackgroundColor='#FFFFFF'
          tabBarActiveTextColor='#FF6E6B'
          tabBarInactiveTextColor='#505050'
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarTextStyle = {styles.tabBarTextStyle}
        >
          {
            this.state.foodTitleData.map((data,index,arr)=>
              <FoodListDataPage key = {data.parentId} tabLabel = {data.name} listData = {data.list} onItemClick = {(cid)=>{
                state.params.itemClick(cid);
                goBack();
              }}/>
            )
          }
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  tabBarUnderline:{
    backgroundColor: '#FF6E6B',
    height: 2,
},
  tabBarTextStyle:{
      fontSize:16,
  }
}); 