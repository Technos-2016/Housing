import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
  FlatList,
  Picker,
  TouchableOpacity,
  ScrollView,
  Button,
  Image
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class CashFlowAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: [],
      selected_province: "",
      districts: [],
      selected_district: "",
      suppliers:[],
     
    };
  }

  componentDidMount() {
     return fetch('https://hss.jeevanbikasdairy.com/api/provincelist.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          provinces: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getDistricts = (province_id) => {
    return fetch(`https://hss.jeevanbikasdairy.com/api/districtlist.php?provinceID=${province_id}`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        districts: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  getSuppliers = (district_id) => {
    return fetch(`https://hss.habitatnepal.org/api/supplier.php?districtID=${district_id}`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        suppliers: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  renderItem =({item})=>{
    return(
      <TouchableOpacity style={{ flexDirection:'row',paddingLeft:25, padding:15,backgroundColor:'#00A650' }}
      onPress={()=>{
        Alert.alert(
          `${item.SupplierName} ${item.SupplierMobileNo}`
          ) }}
      >
      <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Text style={styles.ListText}>
        {item.SupplierName}
      </Text>
      <Text>
        {item.SupplierMobileNo}
      </Text>

      </View>
    </TouchableOpacity>
    )   
  }
  ListEmpty = () => {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}>No Data Found</Text>
      </View>
    );
  };
  
  render() {
    return (        
        <View style={styles.MainContainer}>
        <Icon 
        onPress={()=>{
          this.props.navigation.goBack();
        }}
          name={'keyboard-backspace'} color={'white'} size={40}
          style={{backgroundColor:'#009387', paddingLeft:10}}
        />

        <Text style={styles.headerTitle}>
          Search Suppliers Near You
        </Text>
        <View style={{padding:10}}>
        
        
         <Text>Province Name</Text>
         
          <Picker
            selectedValue={this.state.selected_province}

            onValueChange={(itemValue, itemIndex) => {
              this.setState({selected_province: itemValue});
              this.getDistricts(itemValue);
              }} >

            { this.state.provinces.map((item, key)=>(
            <Picker.Item label={item.ProvinceName} value={item.ProvinceID} key={key} />)
            )}
    
          </Picker>

         <Text>District Name</Text>
         
         <Picker
            selectedValue={this.state.selected_district}

            onValueChange={(itemValue, itemIndex) => {
              this.setState({selected_district: itemValue});
              this.getSuppliers(itemValue);
             }} >

            { this.state.districts.map((item, key)=>(
            <Picker.Item label={item.DistrictName} value={item.DistrictID} key={key} />)
            )}
    
          </Picker>
          <FlatList
            data= {this.state.suppliers}
         renderItem={this.renderItem}
         keyExtractor={(item, index)=>index}
         ItemSeparatorComponent={this.saperator}
         ListEmptyComponent={this.ListEmpty}
        />
        </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  TextInput: {
    width: '100%',
    height: 40,
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#606070',
  },
  headerTitle: {
    fontSize: 20,
   
    paddingVertical: 20,
    textAlign: 'center',
    
  },
});