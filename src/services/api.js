import axios from 'axios';

const api_instance = axios.create();

api_instance.defaults.headers.common['X-Client'] = 'Mobile';

export {
  api_instance,
};
