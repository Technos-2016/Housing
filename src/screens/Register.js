import * as React from 'react';
import {Alert,Picker, Text, TextInput, View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'



export default class Register extends React.Component {
  
  state={
      FirstName: '',
      LastName: '',
      Phone: '',
      loading:false,
      provinces: [],
      provinceID: "",
      districts: [],
      districtID: "",
      vdcs:[],
      vdcID: "",
    }   
  onChangeHandle(state, value){
    this.setState({
      [state]:value
    })
  }

  register(){
    let collection = {}
    collection.FirstName = this.state.FirstName
    collection.LastName = this.state.LastName
    collection.Phone = this.state.Phone
    collection.districtID = this.state.districtID
    collection.vdcID = this.state.vdcID
    // console.warn(collection);
    var url = 'https:hss.habitatnepal.org/api/memberreg.php';
    const {FirstName, LastName, Phone, provinceID, districtID, vdcID} = this.state;
    if(FirstName && LastName && Phone && provinceID && districtID && vdcID){
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: new Headers( {
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(collection),
    })
    .then((response) => response.json())
    .then((res) => {
      Alert.alert(
        "Success",
        res,
        [
          { text: "OK", onPress: () => this.props.navigation.goBack()}
        ],
        { cancelable: false }
      );
    }
    )
    .catch((error) => {
      alert(error)
    });
      }
      else{
        alert("Please enter your details")
    }
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
   getVdc = (district_id) => {
     return fetch(`https://hss.habitatnepal.org/api/vdclist.php?districtID=${district_id}`)
     .then((response) => response.json())
     .then((responseJson) => {
       //console.log(responseJson);
       this.setState({
         isLoading: false,
         vdcs: responseJson
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
         Alert.alert("Hello you pressed a value") }}
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
  render(){
     const { UserCode, PassCode, loading} = this.state;
return (
    
  <KeyboardAvoidingView style={styles.container}>
  <TouchableOpacity
  onPress={()=>this.props.navigation.goBack()}>
        <Icon 
            name='md-arrow-back' size={50} color={'white'}
        />
    </TouchableOpacity>
  <Text style={styles.title}>Register</Text>
  <View style={styles.formWrapper}>
  <View style={styles.formRow}>
    <TextInput 
      style={styles.textInput}
      placeholder={'First Name'}
      
      keyboardType={'default'}
        value={UserCode}
        onChangeText = { (value) => this.onChangeHandle('FirstName', value) }
 
    />
    
  </View>
  <View style={styles.formRow}>
    <TextInput 
      style={styles.textInput}
      placeholder={'Last Name'}
      
      keyboardType={'default'}
        value={UserCode}
        onChangeText = { (value) => this.onChangeHandle('LastName', value) }
 
    />
    
  </View>
  <View style={styles.formRow}>
    <TextInput 
      style={styles.textInput}
      placeholder={'Phone Number'}
      maxLength={10}
      
      keyboardType={'phone-pad'}
        value={UserCode}
        onChangeText = { (value) => this.onChangeHandle('Phone', value) }
 
    />
    
  </View>
  <View style={{padding:10}}>
        
        
         <Text style={{color:'white'}}>Select Province</Text>
         
          <Picker
          style={{color:'white'}}
            selectedValue={this.state.provinceID}

            onValueChange={(itemValue, itemIndex) => {
              this.setState({provinceID: itemValue});
              this.getDistricts(itemValue);
              }} >

            { this.state.provinces.map((item, key)=>(
            <Picker.Item label={item.ProvinceName} value={item.ProvinceID} key={key} />)
            )}
    
          </Picker>

         <Text style={{color:'white'}}>Select District</Text>
         
         <Picker
         style={{color:'white'}}
            selectedValue={this.state.districtID}

            onValueChange={(itemValue, itemIndex) => {
              this.setState({districtID: itemValue});
              this.getVdc(itemValue);
             }} >

            { this.state.districts.map((item, key)=>(
            <Picker.Item label={item.DistrictName} value={item.DistrictID} key={key} />)
            )}
    
          </Picker>
          <Text style={{color:'white'}}>Select VDC</Text>
          <Picker
          style={{color:'white'}}
            selectedValue={this.state.vdcID}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({vdcID: itemValue});
             }} >

            { this.state.vdcs.map((item, key)=>(
            <Picker.Item label={item.VdcName} value={item.VdcID} key={key} />)
            )}
    
          </Picker>
          
        </View>
  
  
  <TouchableOpacity
    style={{...styles.signInBtn, backgroundColor: loading ? '#ddd' : "white"}}
    onPress={()=>this.register()}
    disabled={loading}
    >
      <Text 
      style={styles.signInTxt}
      >{loading ? "Loading...": "Register"}</Text>
    </TouchableOpacity>
  </View>
 
  

  </KeyboardAvoidingView>

  );
}
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
    fontSize:32,
    fontWeight:'bold',
    color:'white',
    textTransform:'uppercase'
    
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  container:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#009387'
  },
  formWrapper:{
    width:'90%',
  },
  formRow:{
    marginBottom:15
  },
  textInput:{
    backgroundColor:"#fff",
    paddingHorizontal:10,
    height:60,
    borderRadius:8,
  },
  signInBtn:{
    backgroundColor:'blue',
    marginVertical:35,
    paddingVertical:18,
    borderRadius:8
  },
  signInTxt:{
    textAlign:"center",
    fontSize:18,
    color:"#009387"
  }
});