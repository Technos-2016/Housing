import React,{Component} from "react";
import {Text,View,StyleSheet,Alert,Image} from "react-native";
import {WebView} from 'react-native-webview';
import * as constant from '../helper/constant';
import Icon from 'react-native-vector-icons/Ionicons';

 export default class ArticleDetails extends Component {
 
render(){
  let {item} = this.props.route.params;
return(
<View style={styles.container}>
<Icon 
        onPress={()=>{
          this.props.navigation.goBack();
        }}
        style={{paddingStart:10,  backgroundColor:'#009387'}} name={'md-arrow-back'} size={30} color={'white'} />
    <Text style={styles.headerTitle}>{item.ArtTitle}</Text> 
    <Image
      style={{height:200,width:'100%'}}
      
      source={{uri: `${constant.API_BASE_URL}/uploads/${item.ArtImage}`}}
      /> 
      <View style={{padding:10, flex:1}}>
      
        {/* <Text style={{color:'white',textAlign:'justify'}}>{item.ArtDescription}</Text> */}
        <WebView 
          scalesPageToFit={false}
          style={{margin:10,alignItems:'center'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{html: item.ArtDescription}} />          
        </View>
      
</View>
);
}
}
const styles = StyleSheet.create({
  container:{ 
    flex: 1,
},
headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: '#009387',
  }, 
});