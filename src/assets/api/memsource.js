import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'peZcLV48sGUYeB8c6HQbQ2';
const API_URL = 'https://cloud.memsource.com/web/api2/v1';

export default {
  login() {
    const query = {
      client_id: CLIENT_ID,
      response_type: 'code',
    };

    axios
      .post(`${API_URL}/auth/login`, {
        userName: 'lxndrbukin',
        password: 'REa1996TSu+-',
      })
      .then((res) => (window.location = `/${res.data.token}`));
  },
};
