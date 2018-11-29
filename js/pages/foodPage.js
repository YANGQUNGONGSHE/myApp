import React, {Component} from 'react';
import {StyleSheet,View,FlatList,TextInput,Dimensions} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import NavigationBarRightComponent from '../components/NavigationBarRightComponent';
import ServiceDataQuery from '../service/ServiceDataQuery'; 
import FoodListItem from '../components/foodListItem';
import FooterComponent from '../components/footerComponent';

const devicewidth = Dimensions.get('window').width;
const ITEM_HEIGHT = 120;
const API = 'https://apis.juhe.cn/cook/index?key=8711871bb184a9cec6be2ec74393d2ee&rn=30';
const SearchAPI = 'https://apis.juhe.cn/cook/query?key=8711871bb184a9cec6be2ec74393d2ee&rn=30';

export default class FoodPage extends Component{

  constructor(props){
    super(props);
    this.skip = 0;
    this.fetchQuery = new ServiceDataQuery();
    this.state = {
      foodData:[],
      cid:'1',
      totalNum:0,
      iputText:'川菜',
      isSearch:false,
    }
  }

  componentDidMount(){
      this.loadData(true);
  }

  loadData(isRefresh){
    if(isRefresh){
      this.skip = 0;
    }
    this.fetchQuery.fetchGetRequest(this.state.isSearch?this.getSearchUrl():this.getUrl())
          .then((respone)=>{
            if(respone.resultcode ==='200'){
                  this.setState({
                    foodData: isRefresh? respone.result.data:this.state.foodData.concat(respone.result.data),
                    totalNum:respone.result.totalNum,
                  });
                  this.skip = this.state.foodData.length;
            }else{
                alert(`请求出错:${respone.reason}`);
            }
          }).catch((error)=>{
            console.log(error);
          })
  }

  loadMoreData = ()=>{
      if(this.skip == this.state.totalNum){
        return;
      }
      this.loadData(false);
  }
  getUrl(){
    return `${API}&cid=${this.state.cid}&pn=${this.skip}`;
  }
  getSearchUrl(){
    return `${SearchAPI}&menu=${this.state.iputText}&pn=${this.skip}`;
  }

  render(){
    const {navigate,goBack} = this.props.navigation;
    return(
      <View style = {styles.root}>
        <NavigationBar
          titleView = {
              <TextInput
                clearButtonMode = 'while-editing'
                placeholder = '搜索你喜欢的菜谱，如川菜'
                placeholderTextColor = '#E0E0E0'
                returnKeyType = 'search'
                selectionColor = '#FFFFFF'
                underlineColorAndroid = 'transparent'
                selectTextOnFocus = {true}
                style = {styles.textInput}
                onChangeText={(text) => this.setState({iputText:text})}
                onSubmitEditing = { async()=>{
                    // alert(this.state.iputText);
                    await this.setState({isSearch:true});
                    this.loadData(true);
                }}
              />
          }
          leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
          rightButton = {<NavigationBarRightComponent onClick = {()=>{
            navigate('FoodTypePage',{
              itemClick: async(typeId)=>{
                await this.setState({
                  cid:typeId,
                  isSearch:false,
                });
                this.loadData(true);
              }
            });
          }}/>}
        />
        <FlatList
          data = {this.state.foodData}
          keyExtractor = {item=>item.id}
          renderItem = {({item})=>
            <FoodListItem
              id = {item.id}
              albums = {item.albums}
              title = {item.title}
              ingredients = {item.ingredients}
              burden = {item.burden}
              onClick = {(id)=>{
                navigate('FoodDetailPage',{
                    foodData:item,
                });
              }}
            />
          }
          onEndReached = {this.loadMoreData}
          getItemLayout={(item, index) => (
                 {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index})}
          ListFooterComponent = {()=>{return <FooterComponent tipsContent ={'正在加载中...'} hasIndicator = {true}/>}}
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
    textInput:{
      width:devicewidth/2,
      marginVertical:5,
      borderWidth:1,
      borderColor:'#FFFFFF',
      borderRadius:20,
      padding:2,
    }
});