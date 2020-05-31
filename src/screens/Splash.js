import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';


export default class Splash extends Component{
render(){
  return (
    <View style={styles.main}>
      
      <Image style={{height:'100%', width:'100%' }}
      source={require('../images/Splash.gif')}
      />
      
    </View>

  )
}
}
const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2cafd7'
},

})