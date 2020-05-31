import React from 'react';
import {
  ActivityIndicator, Alert, Dimensions, Image,
  StatusBar,
  StyleSheet, Text, TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import * as user_actions from '../actions/user_actions';
import store from '../store';
import {api_instance} from "../services/api";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import ImageGallery from "./ImageGallery";
import SignIn from "./SignIn";
import VideoList from "./VideoList";
import Audio from "./Audio";
import ContactCat from "./ContactCat";
import Vplayer from "./Vplayer";
import Aplayer from "./Aplayer";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import Grids from "./Grids";
import SignInScreen from "./SignIn";
import Articles from "./ArticlesCat";
import ModelHouse from "./ModleHouses";
import CashFlowAnalysis from "./CashFlowAnalysis";
import Pamphlet from "./Pamphlet";
import ArticleDetails from "./ArticleDetails";
import MoldeHouseDetails from "./MoldeHouseDetails";
import Message from "./Message";
import Technical from "./Technical";
import Carousel from "./Carousel";
import {FETCH_CURRENT_USER_STOP} from "../actions/types";
import Register from "./Register";
import CustomDrawerContent from "./CustomDrawerContent";
import About from './About';
import Suppliers from './Suppliers';
      
import OurWork from './OurWork';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const AudioStack = createStackNavigator();
const VideoStack = createStackNavigator();
const ContactStack = createStackNavigator();
const HomeStack = createStackNavigator();


function HomeScreen(props) {
  let {navigation} = props;
  return (
    <View style={{flex: 1,}}>
      <View style={{flexDirection: 'row', paddingTop: 15, backgroundColor: '#009387'}}>
      <StatusBar backgroundColor={'#009387'}/>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="md-menu" size={30} style={{marginLeft: 15, height: 25, color: '#fff', width: 25,}}/>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginLeft: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
            HSSP
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 150,marginVertical:20}}>
         
          
        </View>
       
      </View>
      <Carousel/>
      <Grids {...props}/>
    </View>
  );
}

function Videos(props) {
  let {navigation} = props;
  return (
    <View style={{flex: 1,}}>
      <View style={{flexDirection: 'row', paddingTop: 15, backgroundColor: '#009387'}}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="md-menu" size={30} style={{marginLeft: 15, height: 25, color: '#fff', width: 25,}}/>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginLeft: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
            HSSP - VIDEO
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 150, marginVertical:20}}>
          
        </View>
       
      </View>
      <View style={{flex: 1,}}>
        <VideoList {...props}/>
      </View>
    </View>
  );
}

function Audios(props) {
  let {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', paddingTop: 15, backgroundColor: '#009387'}}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="md-menu" size={30} style={{marginLeft: 15, height: 25, color: '#fff', width: 25,}}/>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginLeft: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
            HSSP - AUDIO
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 150, marginVertical:20}}>
         
        </View>
        {/* <View>
        <Icon name="md-more" size={30} style={{height: 40, color:'#fff',width: 20}}/>
      </View>  */}
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Audio {...props}/>
      </View>
    </View>
  );
}

function Contacts(props) {
  let {navigation} = props
  return (
    <View style={{flex: 1.5,}}>
      <View style={{flexDirection: 'row', paddingTop: 15, backgroundColor: '#009387'}}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="md-menu" size={30} style={{marginLeft: 15, height: 25, color: '#fff', width: 25,}}/>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginLeft: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
            HSSP - CONTACT
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 150, marginVertical:20}}>
         
        </View>
        
      </View>
      <View style={{flex: 1}}>
        <ContactCat {...props}/>
      </View>
    </View>
  );
}

function VideoM() {
  return (
    <VideoStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <VideoStack.Screen name="Videos" component={Videos}/>
      <VideoStack.Screen name="Vplayer" component={Vplayer}/>
    </VideoStack.Navigator>
  )
}

function AudioM() {
  return (
    <AudioStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AudioStack.Screen name="Audios" component={Audios}/>
      <AudioStack.Screen name="Aplayer" component={Aplayer}/>
    </AudioStack.Navigator>
  )
}

function contactM() {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ContactStack.Screen name="Contacts" component={Contacts}/>
      <ContactStack.Screen name="ContactList" component={ContactList}/>
      <ContactStack.Screen name="ContactDetails" component={ContactDetails}/>
    </ContactStack.Navigator>
  )
}

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      {/* <HomeStack.Screen name="Pamphlets" component={Pamphlet}/> */}
      <HomeStack.Screen name="Suppliers" component={Suppliers}/>
      <HomeStack.Screen name="OurWork" component={OurWork}/>
      <HomeStack.Screen name="Grids" component={Grids}/>
      <HomeStack.Screen name="SignIn" component={SignInScreen}/>
      <HomeStack.Screen name="Articles" component={Articles}/>
      <HomeStack.Screen name="ModleHouse" component={ModelHouse}/>
      <HomeStack.Screen name="CashFlowAnalysis" component={CashFlowAnalysis}/>
      <HomeStack.Screen name="ArticleDetails" component={ArticleDetails}/>
      <HomeStack.Screen name="MoldeHouseDetails" component={MoldeHouseDetails}/>
      <HomeStack.Screen name="Message" component={Message}/>
      <HomeStack.Screen name="About" component={About}/>
      <HomeStack.Screen name="Technical" component={Technical}/>
    </HomeStack.Navigator>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Videos') {
            iconName = focused ? 'ios-videocam' : 'ios-videocam';
          } else if (route.name === 'Audio') {
            iconName = focused ? 'md-musical-note' : 'md-musical-note';
          } else if (route.name === 'Phamplets') {
            iconName = focused ? 'ios-image' : 'ios-image';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'ios-contact' : 'ios-contact';
          }
          return <Icon name={iconName} size={size} color={color}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen}/>
      <Tab.Screen name="Audio" component={AudioM}/>
      <Tab.Screen name="Videos" component={VideoM}/>
      <Tab.Screen name="Phamplets" component={Phamplets}/>
      <Tab.Screen name="Contacts" component={contactM}/>
    </Tab.Navigator>
  );
}

const Phamplets = (props) => {
  let {navigation} = props
  return (
    <View style={{flex: 1.5,}}>
      <View style={{flexDirection: 'row', paddingTop: 15, backgroundColor: '#009387'}}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="md-menu" size={30} style={{marginLeft: 15, height: 25, color: '#fff', width: 25,}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
            HSSP - PAMPHLETS
          </Text>
          <Text style={styles.headerTitle} >
         
        </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 150, marginVertical:20}}>
          
        </View>
        {/* <View>
        <Icon name="md-more" size={30} style={{height: 40, color:'#fff',width: 20}}/>
      </View>  */}
      </View>
      <View style={{flex: 1,}}>
        {/* <ImageGallery/> */}
        <Pamphlet />
      </View>
    </View>
  );
}

class NavigationScreen extends React.Component {
  is_mounted = false;

  async componentDidMount() {
    this.is_mounted = true;
    await this.init();
  }

  componentWillUnmount() {
    this.is_mounted = false;
  }

  init = async () => {
    const token = await AsyncStorage.getItem('token');
    

    if (token) {
      let user = await AsyncStorage.getItem('user');
      user = JSON.parse(user)
      api_instance.defaults.headers['Authorization'] = `Token ${token}`;
      store.dispatch(user_actions.set_token(token));
      this.props.dispatch(user_actions.set_current_user(user));
    }

    store.dispatch({type: FETCH_CURRENT_USER_STOP});
  };

  render() {
    if (this.props.is_fetching_user) {
      return (
        <View style={styles.container}>
          <ActivityIndicator style={{marginTop: 16}}/>
        </View>
      );
    }

    return (
      <>
        {this.props.token ?
          <>
            <Drawer.Navigator initialRouteName="Home"
                              drawerContent={(props) => {
                                return <CustomDrawerContent {...props}/>
                              }}>
              <Drawer.Screen name="Tabs" component={Tabs}/>
            </Drawer.Navigator>
          </>
          :
          <>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={SignIn} options={{headerShown: false}}/>
              <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            </Stack.Navigator>
          </>
        }
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  user: state.user.user,
  token: state.user.token,
  is_fetching_user: state.user.is_fetching_user
});

export default connect(mapStateToProps)(NavigationScreen);
