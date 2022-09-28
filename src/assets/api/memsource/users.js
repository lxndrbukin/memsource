import axios from 'axios';

const API_URL = 'https://cloud.memsource.com/web/api2';

export default {
  fetchUser: (userUid, token) => {
    return axios.get(`${API_URL}/v3/users/${userUid}?token=${token}`);
  },
};
