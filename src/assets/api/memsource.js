import qs from 'qs';
import axios from 'axios';

// const CLIENT_ID = 'peZcLV48sGUYeB8c6HQbQ2';
const API_URL = 'https://cloud.memsource.com/web/api2';

export default {
  login: async (username, password) => {
    return await axios
      .post(`${API_URL}/v1/auth/login`, {
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
      `${API_URL}/v1/auth/logout?token=${localStorage.getItem('token')}`
    );
  },
  fetchUser: (userUid, token) => {
    return axios.get(`${API_URL}/v3/users/${userUid}?token=${token}`);
  },
};
