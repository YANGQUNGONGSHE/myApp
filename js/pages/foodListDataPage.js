import React, {Component,PureComponent} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity,Text} from 'react-native';

export default class FoodListDataPage extends PureComponent{

  constructor(props){
    super(props);
    this.state = {
      data:[],
    }
  }

  componentDidMount(){
    this.setState({
      data:this.props.listData,
    });
  }

  render(){
      return(
          <View style = {styles.root}>
            <FlatList
              style = {styles.flatList}
              numColumns ={4}
              data = {this.state.data}
              keyExtractor = {item=>item.id}
              renderItem = {({item})=>
                <TouchableOpacity style = {styles.renderItem} onPress = {()=>this.props.onItemClick(item.id)}>
                  <Text style = {styles.foodName}>{item.name}</Text>
                </TouchableOpacity>
              }
            />
          </View>
      );
      
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    margin:3,
    backgroundColor:'#FFFFFF',
    borderWidth:0.5,
    borderRadius:2,
    borderColor:'#dddddd',
    shadowColor:'gray',
    elevation:2,
    shadowRadius:2,
    shadowOffset:{width:0.5,height:0.5},
  },
  flatList:{
  },
  renderItem:{
    flex:1,
    padding:20,
    alignItems:'center',
    justifyContent:'center',
  },
  foodName:{
    fontSize:14,
    fontWeight:"900",
    color:'#505050',
    textAlign:'center',
  }
});