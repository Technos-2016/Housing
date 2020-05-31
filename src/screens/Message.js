import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable={true}
        placeholder="Type your message here"
        maxLength={40}
      />
    );
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      PhoneNo: '',
      Message: ''
    };
  }

  submit() {
    let collection = {}
    collection.Name = this.state.Name
    collection.PhoneNo = this.state.PhoneNo
    collection.Message = this.state.Message
    console.warn(collection);
    var url = 'https://hss.habitatnepal.org/api/message.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(collection),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.Message);
        Alert.alert(
          "Alert Box",
          res.Message,
          [
            { text: "OK", onPress: () => this.props.navigation.navigate('Home') }
          ],
          { cancelable: false }
        );
      })
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Icon
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ paddingStart: 10, paddingLeft: 10, backgroundColor: "#009387" }} name={'md-arrow-back'} size={30} color={'white'} />
        <Text style={styles.headerTitle}>
          Message Box
        </Text>
        <ScrollView style={styles.body}>
          <TextInput
            placeholder="Enter Name"
            onChangeText={Name => this.setState({ Name })}
            underlineColorAndroid="transparent"
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Phone Number"
            onChangeText={PhoneNo => this.setState({ PhoneNo })}
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
            maxLength={10}
            style={styles.TextInput}
          />
          <View style={{
            backgroundColor: this.state.text,
            borderBottomColor: '#000000',
            borderBottomWidth: 1
          }}
          >
            <UselessTextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(Message) => this.setState({ Message })}
              value={this.state.text}
            />
          </View>

          <TouchableOpacity style={{
            height: 55, alignItems: 'center', justifyContent: 'center',
            marginTop: 50, backgroundColor: '#009387', borderRadius: 20
          }}
            onPress={() => this.submit()}
          >
            <Text style={{ color: '#FFF', fontSize: 18 }}>
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
  MessageBox: {
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
  body: {
    padding: 10
  }
})