import React, { Component } from 'react';
import * as constant from "../helper/constant";
import { 
  View,
  Alert,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,  
  ToastAndroid,
  Image,
  ImageBackground
} from 'react-native';
import {connect} from 'react-redux';


class MemberSuppliers extends Component {
  state={
    dataSource:[],
    isLoading:true
  } 
  renderItem =({item})=>{
    
    return(
      <TouchableOpacity style={{flex:1, padding:5}}
      onPress={()=>{Alert.alert(`${item.SupplierName},\n ${item.SupplierMobileNo}`) }}>
        <View style={{ marginVertical:15, marginHorizontal:35}}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>
        {item.SupplierName}
      </Text>
      <Text>
      {item.SupplierMobileNo}
      </Text>
      <Text>
      {item.SupplierCity}
      </Text>
        </View>
    </TouchableOpacity>
    )   
  }
  emptyList = ()=>{
    return(
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text>No Suppliers near you...</Text>
      <Text style={{padding:10}}>Please check the supplier's list from the Suppliers in the Drawer.</Text>
    </View>
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
    const url=`${constant.API_BASE_URL}/api/supplier.php?districtID=${this.props.user.DistrictID}`;

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
        <Text style={styles.headerTitle} >
          Suppliers Near You
        </Text>
        </View>
        
        <FlatList
        data= {this.state.dataSource }
         renderItem={this.renderItem}
         keyExtractor={(item, index)=>index}
         ItemSeparatorComponent={this.saperator}
         ListEmptyComponent={this.emptyList}
        />
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginBottom:50,
    
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

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(MemberSuppliers);