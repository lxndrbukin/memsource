import axios from 'axios';

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
};
