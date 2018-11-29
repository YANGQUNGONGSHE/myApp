import React, {Component} from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import bookDirectory from '../datas/bookDirectory.json';
import BookDirectoryItem from '../components/bookDirectoryItem';

export default class BookModalComponent extends Component{

  render(){
    const {itemClick} = this.props;
    return (
      <View style = {styles.root}>
        <FlatList
          style = {styles.flatList}
          numColumns ={2}
          data = {bookDirectory}
          keyExtractor = {item=>item.id}
          renderItem = {({item})=>
            <BookDirectoryItem
              catalog = {item.catalog}
              id = {item.id}
              onClick = {()=>itemClick(item.id)}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    marginTop:50,
  },
  flatList:{
    margin:5,
  }
});