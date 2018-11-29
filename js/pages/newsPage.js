import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import ScrollableTabView, { ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view';
import NewsDataPage from './newsDataPage';

const newsTypes = [
{Title:'头条',Type:'top'},
{Title:'社会',Type:'shehui'},
{Title:'国内',Type:'guonei'},
{Title:'国际',Type:'guoji'},
{Title:'娱乐',Type:'yule'},
{Title:'体育',Type:'tiyu'},
{Title:'军事',Type:'junshi'},
{Title:'科技',Type:'keji'},
{Title:'财经',Type:'caijing'},
{Title:'时尚',Type:'shishang'}];

export default class NewsPage extends Component{

  onChangeTab =(e)=>{
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavigationBar
          title='新闻'
          style = {styles.navigationBar}
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
        onChangeTab = {this.onChangeTab}
        >
          {
            newsTypes.map((data,index,arr)=>  <NewsDataPage  key = {data.Type} tabLabel={data.Title}  type = {data.Type} typeItemClick ={(itemData)=>{
              navigate('NewDetailPage',{
                title:itemData.title,
                url:itemData.url,
              });
            }}/>)
          }
        </ScrollableTabView>
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
    tabBarUnderline:{
      backgroundColor: '#FF6E6B',
      height: 2,
  },
    tabBarTextStyle:{
        fontSize:16,
    }
  });