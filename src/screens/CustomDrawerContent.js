import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-community/async-storage';
import React from "react";
import * as user_actions from "../actions/user_actions";

class CustomDrawerContent extends React.Component {
  signOut = () => {
    this.props.dispatch(user_actions.set_token(null));
    this.props.dispatch(user_actions.set_current_user(null));
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user');
    this.props.navigation.navigate('SignIn')

  }
  render() {
    let { user } = this.props;

    return (
      <DrawerContentScrollView>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: '70%', top: 20, right: 20 }}
            source={require('../images/Logo.png')} />
        </View>

        <View style={styles.drawerSection}>
          <Text style={{ marginVertical: 15, fontSize: 20, textTransform: 'capitalize', color:'#FF4444',padding:10 }}>
          <Icon name="md-flower" size={28} color='#387' /> 
          {`  ${user ? user.FirstName : ""} ${user ? user.LastName : ""}`}
          </Text>

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('About')}>
              <Icon name="md-information-circle-outline" size={28} color='#387' />
              <Text style={{ left: 15, fontSize: 17, textTransform: 'uppercase' }}>About Us</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('Videos')}>
              <Icon name="ios-videocam" size={28} color="#387" />
              <Text style={{ left: 15, color: '#000', fontSize: 17, textTransform: 'uppercase' }}>Video</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('Audio')}>
              <Icon name="md-musical-notes" size={28} color="#387" />
              <Text style={{ left: 15, color: '#000', fontSize: 17, textTransform: 'uppercase' }}>Audio</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('Phamplets')}>
              <Icon name="ios-image" size={28} color="#387" />
              <Text style={{ left: 15, color: '#000', fontSize: 17, textTransform: 'uppercase' }}>Pamphlet</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('OurWork')}>
              <Icon name="md-git-network" size={28} color="#387" />
              <Text style={{ left: 15, fontSize: 17, textTransform: 'uppercase' }}>Our Work</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('Suppliers')}>
              <Icon name="md-contacts" size={28} color="#387" />
              <Text style={{ left: 10, fontSize: 17, textTransform: 'uppercase' }}>Suppliers Information</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('Contacts')}>
              <Icon name="ios-contacts" size={28} color="#387" />
              <Text style={{ left: 10, fontSize: 17, textTransform: 'uppercase' }}>Contacts Us</Text>
            </TouchableOpacity>
          </View>

          {/* <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
              onPress={() => this.props.navigation.navigate('Technical')}>
              <Icon name="ios-call" size={28} color="#387" />
              <Text style={{ left: 10, fontSize: 17, textTransform: 'uppercase' }}>For Support</Text>
            </TouchableOpacity>
          </View> */}

          <View>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 100, padding: 10 }}
              onPress={() => {this.signOut();}}>
              <Icon name="md-power" size={28} color="#ff6666" />
              <Text style={{ left: 10, fontSize: 17,textTransform: 'uppercase',color:'#ff0000' }}>sign out</Text>
            </TouchableOpacity>
          </View>

        </View>
      </DrawerContentScrollView>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  token: state.user.token,
});

export default connect(mapStateToProps)(CustomDrawerContent);
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sections: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  }
});