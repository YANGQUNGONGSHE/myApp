import React, {Component} from 'react';
import { Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import FadeInView from '../components/FadeInView';

var anima = {
  duration: 1000,   //持续时间
  create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
      type: 'linear',
  }
};

export default class IdiomPage extends Component{

  constructor(props) {
    super(props)

    this.state = {
        width: 250,
        height: 125,
        show:false,
    }
}

_clickStartAnimation() {

    LayoutAnimation.configureNext(anima,()=>{});
    this.setState({
        show: true,
    });
}

render(){

    var secondMoney = this.state.show ? (
        <Image style={{width:this.state.width,height:this.state.height}}
              source={require('../../resource/vPImages/icon_viewpager3.png')}>
        </Image>
    ) : null;

    return (
        <View style={styles.mainStyle}>

            <Image style={{width:this.state.width,height:this.state.height}}
                  source={require('../../resource/vPImages/icon_viewpager3.png')}>
            </Image>

            {secondMoney}

            <TouchableOpacity style={{width:200,height:50,backgroundColor:'yellow',marginTop:40}} onPress={this._clickStartAnimation.bind(this)}>
                <Text style={{width:200,height:50,textAlign:'center',lineHeight:50}}>魔法现金</Text>
            </TouchableOpacity>
        </View>
    );
}
}

const styles = StyleSheet.create({
  mainStyle:{
    flex:1
  }
});