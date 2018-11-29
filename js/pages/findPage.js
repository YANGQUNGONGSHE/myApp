import React, {Component} from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import SwiperComponent from '../components/swiperComponent';
import FindData from '../datas/findData.json';
import FindItem from '../components/findItem';

const imDataSource =[require('../../resource/vPImages/icon_viewpager1.jpg'),
require('../../resource/vPImages/icon_viewpager2.jpg'),
require('../../resource/vPImages/icon_viewpager3.png'),
require('../../resource/vPImages/icon_viewpager4.jpg'),
require('../../resource/vPImages/icon_viewpager5.jpg'),
];

const FindTypeData =[require('../../resource/vPImages/icon_book_title.png'),
require('../../resource/vPImages/icon_food.png'),
require('../../resource/vPImages/icon_lottery.png'),
require('../../resource/vPImages/icon_movie.png'),
require('../../resource/vPImages/icon_phone_query.png'),
require('../../resource/vPImages/icon_exchange.png'),
require('../../resource/vPImages/icon_gasoline.png'),
require('../../resource/vPImages/icon_dictionary.png'),
];

export default class FindPage extends Component{

  constructor(props){
    super(props);

  }

  render() {
    const {navigate} =this.props.navigation;
    return (
      <View style={styles.container}>
        <NavigationBar
          title='发现'
          style = {styles.navigationBar}
        />
        <SwiperComponent
          imSource = {imDataSource}
          autoplay = {true}
          autoplayTimeout = {4}
        />
        <FlatList
          style = {styles.flatList}
          numColumns ={4}
          data = {FindData}
          keyExtractor = {item=>item.Id}
          renderItem = {({item})=>
            <FindItem
              name = {item.Name}
              imUri = {FindTypeData[item.Number]}
              onClick = {()=>{
                navigate(item.Type,{
                  title:item.Name,
                });
              }}
            />
          }
        />
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navigationBar:{
      backgroundColor:'#FF6E6B'
    },
    footComponenet:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
      marginBottom:10,
    },
    loadText:{
      color:'#089AF9'
  },
  flatList:{
    margin:5,
    backgroundColor:'#FFFFFF',
    borderWidth:1,
    borderRadius:3,
    borderColor:'#dddddd',
    shadowColor:'gray',
    elevation:3,
    shadowRadius:3,
    shadowOffset:{width:1,height:1},
  }
  });