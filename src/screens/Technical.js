import React from 'react'
import { View, Text,StyleSheet, ScrollView,Linking } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Technical({navigation}) {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Icon 
        onPress={()=>{
          navigation.goBack();
        }}
          name={'keyboard-backspace'} color={'white'} size={30}
        />
        <Text style={styles.headerText}>
            Technical Assistant
        </Text>   
        </View>
        <ScrollView>
        <View style={styles.content}>
        <Card title="Technical Support">
        <Icon name="person" size={50} style={{paddingLeft:150}}/>
          <Text style={styles.paragraph}>
            Dipak Paswan
          </Text>
          <Text style={styles.paragraph} onPress={()=>{Linking.openURL(`tel:9842411564`);}}>
              +977-9842411564
          </Text>
        </Card>
        <Card title="Technical Support">
        <Icon name="person" size={50} style={{paddingLeft:150}}/>
          <Text style={styles.paragraph}>
            Gopal Kumar Shah
          </Text>
          <Text style={styles.paragraph} onPress={()=>{Linking.openURL(`tel:9842411564`);}}>
              +977-9842411564
          </Text>
        </Card>
        <Card title="Technical Support">
        <Icon name="person" size={50} style={{paddingLeft:150}}/>
          <Text style={styles.paragraph}>
            Gopal Kumar Shah
          </Text>
          <Text style={styles.paragraph} onPress={()=>{Linking.openURL(`tel:9842411564`);}}>
              +977-9842411564
          </Text>
        </Card>
        <Card title="Technical Support"
        >
        <Icon name="person" size={50} style={{paddingLeft:150}}/>
          <Text style={styles.paragraph}>
            Gopal Kumar Shah
          </Text>
          <Text style={styles.paragraph} onPress={()=>{Linking.openURL(`tel:9842411564`);}}>
              +977-9842411564
          </Text>
        </Card>
        </View> 
        </ScrollView>    
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#daedec",
  },
header:{
    padding:20,
    backgroundColor:'#009387',
    
    justifyContent:'center',
    
},
headerText:{
    color:"#fff",
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
    
},
content:{
    backgroundColor:"#daedec",
    marginVertical:10
     
},
paragraph: {
    padding:10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

})