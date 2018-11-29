import React, {Component} from 'react';
import {StyleSheet,View,FlatList,Modal,Text,RefreshControl} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import NavigationBarRightComponent from '../components/NavigationBarRightComponent';
import bookDetailsData from '../datas/bookDetailsData.json';
import BookDetailsItem from '../components/bookDetailsItem';
import BookModalComponent from '../components/bookModalComponent';
import ServiceDataQuery from '../service/ServiceDataQuery';
import FooterComponent from '../components/footerComponent';

const API = 'https://apis.juhe.cn/goodbook/query?key=e80cb151501870abb8455da062bf9438&rn=30';
const ITEM_HEIGHT = 150;

export default class BookPage extends Component{

      constructor(props){
        super(props);
        this.fetchQuery = new ServiceDataQuery();
        this.skip=0;
        this.state = {
          modalVisible:false,
          catalogId:'242',
          bookData:[],
          refreshing:false,
          totalNum:0,
          footerTips:'正在加载中...',
          footerHasIndicator:true,
        }
      }

      componentDidMount(){
        this.loadRefreshData();
      }

      loadRefreshData =()=>{
        this.setState({
          refreshing:true,
          // footerTips:'正在加载中...',
          // footerHasIndicator:true,
        });
        this.loadData(true);
      }

      loadMoreData = ()=>{
        if(this.skip == this.state.totalNum){
          // this.setState({
          //   footerTips:'全部加载完成',
          //   footerHasIndicator:false,
          // });
          return;
        }
        this.loadData(false);
      }

      loadData(isRefresh){

          if(isRefresh){
            this.skip = 0;
          }
          this.fetchQuery.fetchGetRequest(this.getUri(this.state.catalogId))
          .then((respone)=>{
            if(respone.resultcode ==='200'){
                  this.setState({
                    bookData:isRefresh?respone.result.data:this.state.bookData.concat(respone.result.data),
                    refreshing:false,
                    totalNum:respone.result.totalNum,
                  });
                  this.skip = this.state.bookData.length;
            }else{
                alert(`请求出错:${respone.reason}`);
            }
          }).catch((error)=>{
            console.log(error);
          })
      }

      getUri(id){
        return `${API}&catalog_id=${id}&pn=${this.skip}`;
      }

      render(){
        const {state,goBack,navigate} = this.props.navigation;
        return(
          <View style = {styles.root}>
            <NavigationBar
              title = {state.params.title}
              leftButton = {<NavigationBarLeftComponent 
                onClick = {()=>{goBack()}}
              />}
              rightButton = {<NavigationBarRightComponent
                tipsName = {'分类'}
                onClick = {()=>{
                  this.setState({
                    modalVisible:true,
                  });
                }}
              />}
            />
            <FlatList
              style = {styles.flatList}
              numColumns ={3}
              data = {this.state.bookData}
              keyExtractor = {item=>item.title}
              renderItem = {({item})=>
                <BookDetailsItem
                  title = {item.title}
                  img = {item.img}
                  onClick = {()=>{
                    navigate('BookDetailPage',{
                      bookData:item,
                    });
                  }}
                />}
              refreshControl = {
                <RefreshControl
                      refreshing = {this.state.refreshing}
                      onRefresh = {this.loadRefreshData}
                      colors = {['#FF6E6B']}
                      tintColor = {'#FF6E6B'}
                    />}
              onEndReached = {this.loadMoreData}
              getItemLayout={(item, index) => (
                 {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index})}
              ListFooterComponent = {()=>{return <FooterComponent tipsContent ={this.state.footerTips} hasIndicator = {this.state.footerHasIndicator}/>}}
            />
            <Modal 
              animationType = 'slide'
              transparent={true}
              visible = {this.state.modalVisible}
              onRequestClose = {()=>{
                this.setState({
                  modalVisible:!this.state.modalVisible,
                });
              }}
            >
              <BookModalComponent 
                itemClick = {async(id)=>{
                  await this.setState({
                    modalVisible:false,
                    catalogId:id,
                  });
                  this.loadRefreshData();
              }}/>
            </Modal>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  flatList:{
    margin:5,
    backgroundColor:'#FFFFFF'
  }
});