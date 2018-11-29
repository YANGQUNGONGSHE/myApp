/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image} from 'react-native';
import { createStackNavigator ,createBottomTabNavigator} from 'react-navigation';
import NewsPage from './js/pages/newsPage';
import FindPage from './js/pages/findPage';
import MyPage from './js/pages/myPage';
import NewDetailPage from './js/pages/newsDetailPage';
import BookPage from './js/pages/bookPage';
import FoodPage from './js/pages/foodPage';
import FoodDetailPage from './js/pages/foodDetailPage';
import FoodTypePage from './js/pages/foodTypePage';
import LotteryPage from './js/pages/lotteryPage';
import LotteryDetailPage from './js/pages/lotteryDetailPage';
import MoviePage from './js/pages/moviePage';
import PhoneNumberPage from './js/pages/phoneNumberPage';
import ExchangePage from './js/pages/exchangePage';
import GasolinePage from './js/pages/gasolinePage';
import IdiomPage from './js/pages/idiomPage';
import BookDetailPage from './js/pages/bookDetailPage';



const TabBottomTitles = ['新闻','发现','我'];
const TabBottomIcon =[require('./resource/images/icon_news.png'),require('./resource/images/icon_find.png'),
require('./resource/images/icon_my.png')];

const Main = createBottomTabNavigator({

  NewsPage:{screen:NewsPage,navigationOptions:{
    title:TabBottomTitles[0],
    tabBarIcon:({tintColor})=>{
        return icon(TabBottomIcon[0],tintColor);
    }
  }},
  FindPage:{screen:FindPage,navigationOptions:{
  title:TabBottomTitles[1],
  tabBarIcon:({tintColor})=>{
      return icon(TabBottomIcon[1],tintColor);
  }
  }},
  MyPage:{screen:MyPage,navigationOptions:{
  title:TabBottomTitles[2],
  tabBarIcon:({tintColor})=>{
      return icon(TabBottomIcon[2],tintColor);
  }
  }}

},{
  initialRouteName:'NewsPage',
  tabBarOptions:{
    activeTintColor:'#FF6E6B',//#089AF9
    inactiveTintColor:'#505050',//#AFAFAF
    showLabel:true,
    showIcon:true,
    style:{
      backgroundColor:'white',
      
    },
    labelStyle:{
      fontSize: 12,
      marginTop:2,
    },
    tabStyle:{

    },
    allowFontScaling:true,
  }
});

const icon = (icon,tintColor)=>{
  return <Image style = {{tintColor:tintColor}} source = {icon} resizeMode="contain"/>;
}

const BianminApp = createStackNavigator({
  Main:{screen:Main},
  NewDetailPage:{screen:NewDetailPage},
  BookPage:{screen:BookPage},
  FoodPage:{screen:FoodPage},
  FoodDetailPage:{screen:FoodDetailPage},
  FoodTypePage:{screen:FoodTypePage},
  LotteryPage:{screen:LotteryPage},
  MoviePage:{screen:MoviePage},
  PhoneNumberPage:{screen:PhoneNumberPage},
  ExchangePage:{screen:ExchangePage},
  GasolinePage:{screen:GasolinePage},
  IdiomPage:{screen:IdiomPage},
  BookDetailPage:{screen:BookDetailPage},
  LotteryDetailPage:{screen:LotteryDetailPage},
},{
  initialRouteName:'Main',
  headerMode:'none',
  mode:'card',

});

export default BianminApp;


