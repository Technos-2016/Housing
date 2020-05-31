import * as React from 'react';
import {Button, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {connect} from 'react-redux';
import {api_instance} from "../services/api";
import * as user_actions from "../actions/user_actions";


export class SignIn extends React.Component {
  state = {
    Phone: '',
    loading: false
  }

  onChangeHandle(state, value) {
    this.setState({
      [state]: value
    })
  }

  save_to_local_storage = async (token) => {
    await AsyncStorage.setItem('token', token);
  };

  save_user= async (user) => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  login () {
    const {Phone} = this.state;
    if (Phone) {
      this.setState({loading: true});
      axios.post(`https://hss.habitatnepal.org/api/memberlogin.php?Phone=${Phone}`)
        .then(
          res => {
            this.setState({loading: false});
            let data = res.data;
            // console.warn(data);

            if (data && data.AuthToken) {
              let token = data.AuthToken;
              // let user = data.user;

              let user = data;

              this.props.dispatch(user_actions.set_current_user(user));

              this.save_to_local_storage(token);
              this.save_user(user);

              // for api
              api_instance.defaults.headers['Authorization'] = `Token ${token}`;


              // save token via redux
              this.props.dispatch(user_actions.set_token(token));

              // this.props.navigation.navigate('Home');

            } else {
              alert("Phone number not matched!!")
            }

          },
          err => {
            alert(err);
            this.setState({loading: false});
          }
        )
    } else {
      alert("Enter your phone number")
    }


  }

  render() {
    const {Phone, loading} = this.state;
    return (
      <KeyboardAvoidingView  style={styles.container}>
      <StatusBar 
        backgroundColor={'#009387'}
      />
        <Text style={styles.title}>Login</Text>
        <View style={styles.formWrapper}>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter Phone Number'}
              
              keyboardType={'phone-pad'}
              maxLength={10}
              value={Phone}
              onChangeText={(value) => this.onChangeHandle('Phone', value)}

            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{...styles.signInBtn, backgroundColor: loading ? '#ddd' : "white"}}
              onPress={() => this.login()}
              disabled={loading}
            >
              <Text
                style={styles.signInTxt}
              >{loading ? "Loading..." : "Sign In"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.signInBtn, backgroundColor: loading ? '#ddd' : "white"}}
              onPress={() => this.props.navigation.push('Register')}
              disabled={loading}
            >
              <Text
                style={styles.signInTxt}
              >{loading ? "Loading..." : "Sign Up"}</Text>
            </TouchableOpacity>

          </View>

        </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color:'white',
    textTransform:'uppercase'
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#009387'
  },
  formWrapper: {
    width: '90%',
  },
  formRow: {
    marginBottom: 15
  },
  textInput: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    height: 60,
    borderRadius: 8,
  },
  signInBtn: {
    backgroundColor: 'blue',
    paddingVertical: 18,
    borderRadius: 8,
    padding: 52,
    marginHorizontal: 20
  },
  signInTxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#009387"
  }
});


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SignIn);
