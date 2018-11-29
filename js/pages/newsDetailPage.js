import React, {Component} from 'react';
import {StyleSheet,View,WebView,ActivityIndicator} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import NavigationBarRightComponent from '../components/NavigationBarRightComponent';

export default class NewDetailPage extends Component{


  constructor(props){
    super(props);
    this.state = {
      loading:true,
    }
  }

  render() {
    const {goBack,state} = this.props.navigation;
    const loadView = this.state.loading?
    <ActivityIndicator
            style = {styles.ActivityIndicator}
            size ="large"
            color ="#FF6E6B"/>:null;
    return (
      <View style={styles.container}>
        <NavigationBar
          title={'新闻详情页'}
          style = {styles.navigationBar}
          leftButton = {
            <NavigationBarLeftComponent
              onClick = {()=>goBack()}
            />
          }
        />
        <WebView
          source = {{uri:state.params.url}}
          onLoad = {()=>this.setState({loading:false})}
          // startInLoadingState = {true}
          // renderLoading = {()=> 
          // <ActivityIndicator
          //   style = {styles.ActivityIndicator}
          //   size ="large"
          //   color ="#FF6E6B"/>}
        />
        {loadView}
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
    ActivityIndicator:{
      flex:1,
      backgroundColor:'#FFFFFF',
    }
  });