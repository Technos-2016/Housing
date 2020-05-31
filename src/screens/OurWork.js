import React from 'react'
import { View,Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native-gesture-handler';

export default function About({navigation}) {
    return (
        <View style={styles.container}>
        <View>
         <Icon 
        onPress={()=>{
          navigation.goBack();
        }}
          name={'keyboard-backspace'} color={'white'} size={40}
          style={{backgroundColor:'#009387',paddingLeft:10}}
        />
        <Text style={styles.headerTitle} >
            Our Work
        </Text>
        </View>
        <ScrollView>
        <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>
        "We build strength, stability and self-reliance through shelter."
        </Text>
        <Text style={{padding:15, textAlign:'justify', color:'red'}} >
        We work in partnership with Government of Nepal and Local Non-governmental organizations in the following areas:
        </Text>
        <View style={styles.body}>
        <Text>{'\u2B24'} Community housing for most vulnerable families</Text>
        <Text>{'\u2B24'} Technical assistant to NGO microfinance institutions</Text>
        <Text>{'\u2B24'} Advocacy on land right of women</Text>
        <Text>{'\u2B24'} Training and capacity building of communities and construction labours</Text>
        <Text>{'\u2B24'} Youth engagement on safe shelters.</Text>
        </View>
        <Text style={{padding:15, textAlign:'justify', color:'red'}} >
        For housing microfinance loan, please contact nearest branch offices of the following institutions:
        </Text>
        <View style={styles.bodyText}>
        <Text style={{textAlign:'justify'}}>
        1. Sahara Nepal Saving and Credit Cooperative Society Limited    
        </Text>
        <Text style={{textAlign:'justify'}}>
            Head Office: Charpane, Birtamod-4, Jhapa, Nepal 
        </Text>
        <Text style={{textAlign:'justify'}}>
            Phone: +977-23-543408
        </Text>
        <Text style={{textAlign:'justify'}}>
            Email: info@saharanepal.coop.np
        </Text>
        <Text style={{textAlign:'justify'}}>
       Web: www.saharanepal.coop.np
   </Text>
        </View>
        <View style={styles.bodyText}>
        <Text style={{textAlign:'justify'}}>
        2. Jeevan Bikas Samaj Laghubitta Bittiya Sanstha Limited
           
        </Text>
        <Text style={{textAlign:'justify'}}>
        Head Office: Rangeli Road, Katahari-2, Morang, Nepal
            
        </Text>
        <Text style={{textAlign:'justify'}}>
        Phone: +977-21-442662/442312; +977-9802796196
           
        </Text>
        <Text style={{textAlign:'justify'}}>
        Email: info@jeevanbikas.org.np
             
        </Text>
        <Text style={{textAlign:'justify'}}>
        Web: www.jeevanbikasmf.com
   </Text>
        </View>
        <View style={styles.bodyText}>
        <Text style={{textAlign:'justify'}}>
        3. Mahuli Laghubitta Bittiya Sanstha Limited   
        </Text>
        <Text style={{textAlign:'justify'}}>
        Head Office: Mahuli, Bakadhuwa-9, Saptari, Nepal
            
        </Text>
        <Text style={{textAlign:'justify'}}>
        Phone: +977-31-411005/411006
           
        </Text>
        <Text style={{textAlign:'justify'}}>
        Email: info@mslbsl.com.np
           
        </Text>
        <Text style={{textAlign:'justify'}}>
        Web: www.mslbsl.com.np
   </Text>
        </View>
        <View style={{paddingVertical:15}} >

        </View>
        
        </ScrollView>
        </View>
    )
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
    body:{
        padding:10,
        borderBottomWidth:1
    },
    bodyText:{
        
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:"red"
    }
  });