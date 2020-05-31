import React from 'react'
import {View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';

const Grids = ({token, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bottomItem}
                        onPress={() => {
                          navigation.navigate('CashFlowAnalysis');
                          // if (token) {
                          //   navigation.navigate('CashFlowAnalysis');
                          // } else {
                          //   navigation.navigate('SignIn');
                          // }
                        }}>
        <View style={styles.bottomInner1}>
          <Icon name="md-swap" size={30} style={{marginLeft: 15, height: 25, width: 25, color: '#fff'}}/>
          <Text style={styles.innerText}>
            Cash Flow
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomItem}
                        onPress={() => {
                          navigation.navigate('ModleHouse')
                        }}
      >
        <View style={styles.bottomInner2}>
          <Icon name="ios-home" size={30} style={styles.icon}/>
          <Text style={styles.innerText}>
            Model Houses
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomItem}
                        onPress={() => {
                          navigation.navigate('Articles')
                        }}
      >
        <View style={styles.bottomInner3}>
          <Icon name="ios-copy" size={30} style={styles.icon}/>
          <Text style={styles.innerText}>
          Beneficiery Story
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomItem}
                        onPress={() => {
                          navigation.navigate('Message')
                        }}
      >
        <View style={styles.bottomInner4}>
          <Icon name="md-text" size={30} style={styles.icon}/>
          <Text style={styles.innerText}>
            Message Box
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.user.user,
  token: state.user.token,
});

export default connect(mapStateToProps)(Grids);

const styles = StyleSheet.create({
  container:{
    height:'50%',
    backgroundColor:'#fff',
    flexDirection:'row',
    flexWrap:'wrap',
    padding:10
  },
  bottomItem:{
    
    borderRadius:5,
    padding:10,
    width:'50%',
    height:'50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  bottomInner1:{
    flex:1,
    backgroundColor:'#d63447',
    justifyContent:'center',
    alignItems:'center',
  },
  bottomInner2:{
    flex:1,
    backgroundColor:'#fa9191',
    justifyContent:'center',
    alignItems:'center',
  },
  bottomInner3:{
    flex:1,
    backgroundColor:'#eb6383',
    justifyContent:'center',
    alignItems:'center',
  },
  bottomInner4:{
    flex:1,
    backgroundColor:'#6a097d',
    justifyContent:'center',
    alignItems:'center',
  },
  
  innerText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'
  },
  icon:{
    marginLeft:15,
    height: 25,
    width: 25,
    color:'#fff'
  }

})