import {api_instance} from './api';

export const login = (payload) => {
  return api_instance.post('/users/auth/', payload);
};

export const logout = () => {
  return api_instance.post('/users/logout/');
};

export const get_current_user = () => {
  return api_instance.get('/users/me/');
};
