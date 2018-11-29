import {
  AsyncStorage,
} from 'react-native';

export default class ServiceDataQuery{

      /**
       * 基本网络请求数据
       * @param {*} url 
       * @param {*} method 
       * @param {*} bodyPrograms 
       */
      fetchRequest(url,method,bodyPrograms=null){
        return new Promise((resolve,reject)=>{
            fetch(url,{
              method:method,
              headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              // body:JSON.stringify(bodyPrograms?bodyPrograms:{})
            }).then((respone)=>respone.json())
            .then((responeData)=>{
                  if(!responeData){
                    reject(new Error('responeData is null'));
                    return; 
                  }
                  resolve(responeData);
            }).catch((error)=>{
              reject(error);
              console.log(error);
            })
        })
      }
      
      /**
       * POST 请求
       * @param {*} url 
       * @param {*} params 
       */
      fetchPostRequest(url,params){
          return new Promise((resolve,reject)=>{
            this.fetchRequest(url,'POST', params)
            .then((respone)=>{
              resolve(respone);
            })
            .catch((error)=>{
              reject(error);
              console.log(error);
            })
          })
      }
      
      /**
       * GET 请求
       * @param {*} url 
       * @param {*} params 
       */
      fetchGetRequest(url,params){
        return new Promise((resolve,reject)=>{
          this.fetchRequest(url,'GET',params)
          .then((respone)=>{
            resolve(respone);
          })
          .catch((error)=>{
            reject(error);
            console.log(error);
          })
        })
      }

      /**
     * 判断数据是否过时
     * @param {*} longTime 数据的时间戳
     */
    checkData(longTime){

      let cTime = new Date();
      let tTime = new Date();

      tTime.setTime(longTime);
      if(cTime.getMonth()!==tTime.getMonth())return false;
      if(cTime.getDay()!==tTime.getDay())return false;
      if(cTime.getHours()-tTime.getHours()>4)return false;
      return true;
  }
  
  /**
   * 存储数据到本地
   * @param {*} data 
   * @param {*} key 
   */
  saveData(data,key){
    if(!data)return;
    AsyncStorage.setItem(key,JSON.stringify(data));
  }

  /**
   * 查询本地存储数据
   * @param {*} key 
   */
  getData(key){
    return new Promise((resolve,reject)=>{
      AsyncStorage.getItem(key,(error,result)=>{
        if(!error){
          try {
            resolve(JSON.parse(result));
          } catch (e) {
            reject(e);
            console(e);
          }
        }else{
            reject(error);
            console(error);
        }
      });
    });
  }

}