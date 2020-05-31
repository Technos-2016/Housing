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
import Icon from 'react-native-vector-icons/Ionicons';
// import ArticleList from "./ArticleList";

export default class ArticleCat extends Component {
  constructor(){
    super()
    this.state={
      isLoading:true,
      Categories:[],
      selected_category:"",
      articles:[]
    } 
  }
  renderItem =({item})=>{
    const url = 'https://hss.habitatnepal.org/'
    return(
      <TouchableOpacity style={{ flexDirection:'row',paddingLeft:25, padding:15, }}
      onPress={()=>{
        this.props.navigation.navigate('ArticleDetails', {item: item}) }}
      >
      <View>
      <Image
      style={{height:80,width:80,borderRadius:5}}
      source={{uri: `${url}/uploads/${item.ArtImage}`}}/>
      <View style={{justifyContent:"center"}}> 
      <Text style={styles.ListText}>
        {item.ArtTitle}
      </Text>
      </View>
      </View>
    </TouchableOpacity>
    )   
  }
  
  componentDidMount(){
    const url='https://hss.habitatnepal.org/api/articlecategory.php'
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
  getArticleList = (articlecat_id) => {
    return fetch(`https://hss.habitatnepal.org/api/articlelist.php?catID=${articlecat_id}`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        articles: responseJson,
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
        <View >
        
        <Icon 
        onPress={()=>{
          this.props.navigation.goBack();
        }}
        style={{paddingStart:10,  backgroundColor:'#009387'}} name={'md-arrow-back'} size={30} color={'white'} />
       
        <Text style={styles.headerTitle} >
        Beneficiery Stories
        </Text>
        </View>
        <View >
        
        <Picker
        style={styles.picker}
        selectedValue={this.state.selected_category}
        onValueChange={(itemValue, itemIndex) => {
              this.setState({selected_category: itemValue});
              
              this.getArticleList(itemValue);
              }}>
              <Picker.Item label="Select your catagory" value="0" />
            { this.state.Categories.map((item, key)=>(
            <Picker.Item label={item.ArtCategoryName} value={item.ArtCategoryID} key={key} />)
            )}
        </Picker>
        
        <FlatList
        data= {this.state.articles}
         renderItem={this.renderItem}
         keyExtractor={(item, index)=>index}
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
    fontSize:12,
  
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