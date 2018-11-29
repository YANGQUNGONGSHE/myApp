import React, {PureComponent} from 'react';
import {StyleSheet,View,Image,Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const deviceWidth = Dimensions.get('window').width;

export default class SwiperComponent extends PureComponent{

    constructor(props){
      super(props);
    }
    //轮播图条目切换时的回调函数
  _onIndexChanged = (index)=>{
      
  }
    render(){
      return(
        <View style = {styles.root}>
          <Swiper
            horizontal={true}
            loop={true}
            index={0}
            showsButtons={false}
            autoplay={this.props.autoplay}
            onIndexChanged={this._onIndexChanged}
            showsPagination = {true}
            paginationStyle = {styles.paginationStyle}
            autoplayTimeout = {this.props.autoplayTimeout}
            // dotColor ='#505050'
            activeDotColor='white'
          >
            {
              this.props.imSource.map(data=> <Image key = {data} style = {styles.img} source ={data} />)
            }
          </Swiper>
        </View>
      );
    }
}

const styles  = StyleSheet.create({
  root:{
    height:160,
  },
  img:{
      alignSelf:'center',
      width:deviceWidth,
      height:160,
  },
  paginationStyle:{
    position: 'absolute',
    bottom: 5,
  }
});