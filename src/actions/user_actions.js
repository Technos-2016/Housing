import {
  USER_LOGOUT,
  SET_CURRENT_USER,
  SET_TOKEN,
} from "./types";

import * as user_service from '../services/user_service';
import {api_instance} from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
// import NavigationService from '../NavigationService';

export const user_logout = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({type: USER_LOGOUT});
    user_service.logout().then(res => {
      delete api_instance.defaults.headers['Authorization'];
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('user');

      // NavigationService.navigate('Auth');

      resolve(res);
    }).catch(err => {
      delete api_instance.defaults.headers['Authorization'];
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('user');

      // NavigationService.navigate('Auth');
    });
  });
};

export const set_current_user = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const set_token = (token) => ({
  type: SET_TOKEN,
  payload: token
});
