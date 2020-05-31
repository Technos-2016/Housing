import React,{Component} from 'react'
import { View,Text,ScrollView,StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} 
        editable = {true}
        placeholder="Type your message here"
        maxLength = {40}
      />
    );
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputName: '',
      TextInputNumber: '',
      TextInputMessage: ''
    };
  }

  submit(){
    let collection = {}
    collection.TextInputName = this.state.TextInputName
    collection.TextInputNumber = this.state.TextInputNumber
    collection.TextInputMessage = this.state.TextInputMessage
    // console.warn(collection);

    var url = 'https:hss.habitatnepal.org/api/message.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: new Headers( {
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(collection),
    })
    .then((response) => response.json())
    .then((res) => {
      alert('Your message sent',res)
    })
    .catch((error) => {
      alert('No message sent', error)
    });
      }
  render(){
    return (
        <View style={styles.MainContainer}>
        <Icon 
        onPress={()=>{
          this.props.navigation.goBack();
        }} 
        style={{paddingStart:10, paddingLeft:10, backgroundColor:"#009387"}} name={'md-arrow-back'} size={30} color={'white'} />
        <Text style={styles.headerTitle}>
          Message Box
        </Text>
        <ScrollView style={styles.body}>
        <TextInput
          placeholder="Enter First Name"
          onChangeText={TextInputName => this.setState({ TextInputName })}
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Phone Number"
          onChangeText={TextInputNumber => this.setState({ TextInputNumber })}
          underlineColorAndroid="transparent"
          keyboardType="phone-pad"
          style={styles.TextInput}
        />
         <View style={{
            backgroundColor: this.state.text,
            borderBottomColor: '#000000',
            borderBottomWidth: 1 }}
               >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(TextInputMessage) => this.setState({TextInputMessage})}
         value={this.state.text}
       />
     </View>

        <TouchableOpacity style={{height:55, alignItems:'center',justifyContent:'center',
          marginTop:50,backgroundColor:'#009387', borderRadius:20}}
              onPress={()=>this.submit()}
              >
            <Text>
                Submit
            </Text>
        </TouchableOpacity>
        
        </ScrollView>
        </View>
    )
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
      borderColor: '#009387',
    },
    MessageBox:{
        width: '100%',
        paddingLeft: 5,
        borderWidth: 1,
        marginTop: 15,
        borderColor: '#009387',
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
    padding:10
  }
})