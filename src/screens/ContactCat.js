import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,  
  ToastAndroid,
  Image,
  Picker
} from 'react-native';


export default class ArticleCat extends Component {
  constructor(){
    super()
    this.state={
      isLoading:true,
      Categories:[],
      selected_category:"",
      contacts:[]
    } 
  }
  renderItem =({item})=>{
    const url = 'https://hss.habitatnepal.org/'
    return(
      <TouchableOpacity style={{ flexDirection:'row',paddingLeft:25, padding:15, }}
      onPress={()=>{
        this.props.navigation.navigate('ContactDetails', {item: item}) }}
      >
      <View style={{flex:1,flexDirection:'row'}}>
      <Image
      style={{height:60,width:60,borderRadius:5}}
      source={{uri: `${url}/uploads/${item.Photo}`}}
      />
      <Text style={styles.ListText}>
        {item.FirstName} {item.LastName}
      </Text>

      </View>
    </TouchableOpacity>
    )   
  }
  saperator=()=>{
    return(
      <View
      style={{height:1,width:"100%", backgroundColor:'black'}}>

      </View>
    )
  }
  
  componentDidMount(){
    const url='https://hss.habitatnepal.org/api/contactcategory.php'
    fetch(url).then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        Categories:responseJson,
        isLoading:false
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  getContactList = (contact_id) => {
    
    return fetch(`https://hss.habitatnepal.org/api/contactdetail.php?conCatID=${contact_id}`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        contacts: responseJson,
      })
    })
    .catch((error) => {
      console.error(error);
    });
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
      this.state.isLoading
      ?
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
      :
      <View style={styles.container}>
        
        <View style={{borderBottomColor:'#000',borderBottomWidth:1}}>
        
        <Picker
        style={styles.picker}
        selectedValue={this.state.selected_category}
        onValueChange={(itemValue, itemIndex) => {
              this.setState({selected_category: itemValue});
              this.getContactList(itemValue);
              }}>
              <Picker.Item label="Select your catagory" value="0" />
            { this.state.Categories.map((item, key)=>(
            <Picker.Item label={item.ConCategory} value={item.ConCatID} key={key} />)
            )}
        </Picker>
        
        <FlatList
        data= {this.state.contacts}
         renderItem={this.renderItem}
         keyExtractor={(item, index)=>index}
         ItemSeparatorComponent={this.saperator}
         ListEmptyComponent={this.ListEmpty}
        />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: '#009387',
  },
  ListText:{
    fontSize:15,
    fontWeight:'600', 
   paddingHorizontal:15,
   justifyContent:'center'
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  picker:{
    padding:10,
    
    justifyContent:'center',
    alignItems:'center',
    
  }

})