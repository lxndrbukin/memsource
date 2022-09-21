import qs from 'qs';
import axios from 'axios';

// const CLIENT_ID = 'peZcLV48sGUYeB8c6HQbQ2';
const API_URL = 'https://cloud.memsource.com/web/api2/v1';

export default {
  login: async () => {
    // const query = {
    //   client_id: CLIENT_ID,
    //   response_type: 'code',
    // };

    await axios
      .post(`${API_URL}/auth/login`, {
        userName: 'lxndrbukin',
        password: 'REa1996TSu+-',
      })
      .then((res) => {
        localStorage.setItem('uid', res.data.user.uid);
        localStorage.setItem('token', res.data.token);
      });
  },
  logout: async () => {
    await axios.post(
      `${API_URL}/auth/logout?token=${localStorage.getItem('token')}`
    );
  },
};
