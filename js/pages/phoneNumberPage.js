import React, {Component} from 'react';
import {StyleSheet,View,TextInput,Text} from 'react-native';
import NavigationBar from '../utils/NavigationBar';
import NavigationBarLeftComponent from '../components/NavigationBarLeftComponent';
import ServiceDataQuery from '../service/ServiceDataQuery'; 
const API = 'https://apis.juhe.cn/mobile/get?key=您申请的KEY&phone=';

export default class PhoneNumberPage extends Component{



  constructor(props){
    super(props);
    this.fetchQuery = new ServiceDataQuery();
    this.state={
      textContent:'',
      province:'xxxxx',
      city:'xxxxx',
      areacode:'xxxxx',
      zip:'xxxxx',
      company:'xxxxx',
    }
  }

  loadData(){
    this.fetchQuery.fetchGetRequest(this.getUrl())
    .then((respone)=>{
      if(respone.resultcode ==='200'){
            this.setState({
              province: respone.result.province,
              city:respone.result.city,
              areacode:respone.result.areacode,
              zip:respone.result.zip,
              company:respone.result.company
            });
      }else{
          alert(`请求出错:${respone.reason}`);
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  getUrl(){
    return `${API}${this.state.textContent}`;
  }

  render(){
    const {goBack,state} = this.props.navigation;
    return(
      <View style = {styles.root}>
        <NavigationBar
          title = {state.params.title}
          leftButton = {<NavigationBarLeftComponent onClick = {()=>goBack()}/>}
        />
        <TextInput
          style = {styles.input}
          underlineColorAndroid="transparent"
          keyboardType = 'numeric'
          returnKeyType = 'search'
          placeholder = '输入想要查询的手机号码'
          placeholderTextColor = '#848484'
          selectionColor = '#FF6E6B'
          selectTextOnFocus = {true}
          maxLength = {11}
          onChangeText={(text) => this.setState({textContent:text})}
          onSubmitEditing = {()=>{
            this.loadData();
          }}
        />
        <View style = {styles.resultContainer}>
          <Text style = {styles.Tips}>查询结果</Text>
          <Text style = {styles.itemContent}>{`省份：${this.state.province}`}</Text>
          <Text style = {styles.itemContent}>{`城市：${this.state.city}`}</Text>
          <Text style = {styles.itemContent}>{`区号：${this.state.areacode}`}</Text>
          <Text style = {styles.itemContent}>{`邮编：${this.state.zip}`}</Text>
          <Text style = {styles.itemContent}>{`运营商：${this.state.company}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  input:{
    margin:5,
    padding:0,
    borderWidth:0.5,
    borderColor:'#FAFAFA',
    borderRadius:5,
    backgroundColor:'#FFFFFF',
    textAlign:'center'
  },
  resultContainer:{
    margin:5,
    padding:10,
    backgroundColor:'#FFFFFF',
    borderWidth:0.5,
    borderRadius:2,
    borderColor:'#dddddd',
    shadowColor:'gray',
    elevation:2,
    shadowRadius:2,
    shadowOffset:{width:0.5,height:0.5},
  },
  Tips:{
    marginTop:10,
    fontSize:16,
    fontWeight:'bold',
    color:'#242424',
    textAlign:'center'
  },
  itemContent:{
    fontSize:14,
    fontWeight:'300',
    color:'#242424',
    marginTop:10,
    marginLeft:20,
  }
});