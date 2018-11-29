import React, {Component} from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import NavigationBarRightComponent from '../components/NavigationBarRightComponent';
import testFindData from '../datas/testFindData.json';
// import CellDiscoverComponent from '../comm/cell/CellDiscoverComponent';
import CellDiscoverNopicComponent from '../comm/cell/CellDiscoverNopicComponent';
import CellDiscoverOnepicComponent from '../comm/cell/CellDiscoverOnepicComponent';
import CellDiscoverTwopicComponent from '../comm/cell/CellDiscoverTwopicComponent';
import CellDiscoverThreepicComponent from '../comm/cell/CellDiscoverThreepicComponent';

const HH = [22,23,43];

export default class GasolinePage extends Component{

  constructor(props){
    super(props);
    // this.imageTypes = [];
    // this.imageUrls = [];
    // this.numCount =0;
  }

  checkoutImageType(item){
    return item.type === 1;
  }

  cellView = (data)=> {
    // alert(++this.numCount);
    let imageTypes = [];
    let imageUrls = [];
    imageTypes = data.paragraphs.filter(this.checkoutImageType);
    imageTypes.forEach(element => {
        imageUrls.push(element.url);
    });
    return (
      imageTypes.length <1?<CellDiscoverNopicComponent article = {data} showBottomSpace={true} onPress={() => {alert(data.id)}}/>:
      imageTypes.length ===1?<CellDiscoverOnepicComponent article = {data} showBottomSpace={true} onPress={() => {alert(data.id)}}/>:
      imageTypes.length ===2?<CellDiscoverTwopicComponent article = {data} showBottomSpace={true} onPress={() => {alert(data.id)}}/>:
      <CellDiscoverThreepicComponent article = {data} urls = {imageUrls.slice(0,3)} showBottomSpace={true} onPress={() => {alert(data.id)}}/>
    );
  }

  render(){
    const {state,goBack,navigate} = this.props.navigation;
    return(
      <View style = {styles.root}>
        <NavigationBar
            title = {state.params.title}
            leftButton = {<NavigationBarLeftComponent 
            onClick = {()=>{goBack()}}/>}/>
        <FlatList
          data={testFindData}
          keyExtractor={item => item.id}
          initialNumToRender={10}
          renderItem={({item, index}) => this.cellView(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});