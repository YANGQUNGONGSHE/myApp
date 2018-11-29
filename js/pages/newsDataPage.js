import React, {Component} from 'react';
import {StyleSheet,View,FlatList,RefreshControl} from 'react-native';
import NewsItem from '../components/NewsItem';
import FooterComponent from '../components/footerComponent';
import ServiceDataQuery from '../service/ServiceDataQuery';
import NewsTestData from '../datas/newsTestData.json';

const API = 'https://v.juhe.cn/toutiao/index?key=b5770a2e4e86d523e8e8bb294f6f52eb&type=';



export default class NewsDataPage extends Component{

      constructor(props){
        super(props);
        this.dataquery = new ServiceDataQuery();
        this.state = {
          NewsData:[],
          Refreshing:false,
          Type:'top',
        }
      }

    async componentDidMount(){
      await this.setState({
            Type:this.props.type,
            // Refreshing:true,
          });
          this.loadRefreshData();
      }
      /**
       * 下拉刷新数据
       */
    loadRefreshData = async()=>{
      await this.setState({
          Refreshing:true,
        });
        this.loadData(true);
      }
      /**
       * 上拉加载更多数据
       */
      loadMoreData = ()=>{
          this.loadData(false);
      }

      loadData(isRefresh){
        this.dataquery.fetchGetRequest(this.getUrl(this.state.Type))
        .then((respone)=>{
          if(respone.reason ==='成功的返回'){
            this.setState({
              NewsData:isRefresh?respone.result.data:this.state.NewsData.concat(respone.result.data),
              Refreshing:false,
            });
          }else{
            this.setState({
              Refreshing:false,
            });
            alert(`请求出错${respone.reason}`);
          }
        }).catch((error)=>{
          console.log(error);
        })
      }

      getUrl(type){
        return `${API}${type}`;
      }
          
      render(){
        // const {navigate} = this.props.navigation;
        return(
          <View style = {styles.root}>
            <FlatList
              style = {styles.flatList}
              data = {this.state.NewsData}
              keyExtractor = {item=>item.uniquekey}
              renderItem = {({item})=>
                <NewsItem 
                  itemData = {item}
                  onClick = {()=>this.props.typeItemClick(item)}
                />}
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.Refreshing}
                  onRefresh = {this.loadRefreshData}
                  colors = {['#FF6E6B']}
                  tintColor = {'#FF6E6B'}
                />
              }
              // onEndReached = {this.loadMoreData}
              // ListFooterComponent = {()=>{
              //   return <FooterComponent tipsContent ={'全部加载完成'} hasIndicator = {false}/>
              // }}
              ItemSeparatorComponent = {()=>{
                return <View style = {styles.line}/>;
              }}
            />
          </View>
              );
      }  
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  line:{
    height:0.5,
    backgroundColor:'#A3A3A3',
    },
    flatList:{
      marginLeft:10,
      marginRight:10,
    }
});