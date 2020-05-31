import React, { Component } from 'react';
import * as constant from "../helper/constant";
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,  
  ToastAndroid,
  Image,
  ImageBackground
} from 'react-native'
import Vplayer from './Vplayer';

export default class VideoList extends Component {
  constructor(){
    super()
    this.state={
      dataSource:[],
      isLoading:true
    } 
  }
  renderItem =({item})=>{
    
    return(
      <TouchableOpacity style={{flex:1,flexDirection:'column',padding:5}}
      onPress={()=>{
      this.props.navigation.navigate('Vplayer', {item: item}) }}>
      <ImageBackground source={{uri: `${constant.API_BASE_URL}/uploads/${item.VideoThumb}`}}
       style={{height:180,width:'100%'}}>
         <Text style={{flex:1,fontSize:15,fontWeight:'bold',textAlign:'center',color:'white',justifyContent:'center',marginTop:50,}}>
        {item.VideoName}
      </Text>
      </ImageBackground>
    </TouchableOpacity>
    )   
  }
  saperator=()=>{
    return(
      <View
      style={{height:1,width:"100%", backgroundColor:'black'}}
      >

      </View>
    )
  }
  
  componentDidMount(){
    const url=`${constant.API_BASE_URL}/api/videolist.php`
    fetch(url).then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        dataSource:responseJson,
        isLoading:false
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  render() {
    return (
      this.state.isLoading
      ?
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
      :
      <View style={styles.container}>
        
        <View >
        <FlatList
        data= {this.state.dataSource }
         renderItem={this.renderItem}
         numColumns={2}
         keyExtractor={(item, index)=>index}
         ItemSeparatorComponent={this.saperator}
        />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  headerTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: '#009387',
  },
})