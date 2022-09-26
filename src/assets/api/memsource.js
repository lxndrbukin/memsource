import qs from 'qs';
import axios from 'axios';

// const CLIENT_ID = 'peZcLV48sGUYeB8c6HQbQ2';
const API_URL = 'https://cloud.memsource.com/web/api2/v1';

export default {
  login: async (username, password) => {
    return await axios
      .post(`${API_URL}/auth/login`, {
        userName: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('uid', res.data.user.uid);
      });
  },
  logout: async () => {
    await axios.post(
      `${API_URL}/auth/logout?token=${localStorage.getItem('token')}`
    );
  },
};
