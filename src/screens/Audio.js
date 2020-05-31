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
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

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
      <TouchableOpacity style={{flex:1, padding:5}}
      onPress={()=>{
      this.props.navigation.navigate('Aplayer', {item: item}) }}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Icon name="md-play-circle" size={30} style={{padding:10}} />
        <Text style={{flex:1,fontSize:15,fontWeight:'bold'}}>
        {item.AudioName}
      </Text>
        </View>
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
    const url=`${constant.API_BASE_URL}/api/audiolist.php`
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
        </View>
        
        <FlatList
        data= {this.state.dataSource }
         renderItem={this.renderItem}
         keyExtractor={(item, index)=>index}
         ItemSeparatorComponent={this.saperator}
        />
        
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