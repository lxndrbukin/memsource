import axios from 'axios';

const API_URL = 'https://cloud.memsource.com/web/api2';

export default {
  fetchProjects: (token) => {
    return axios.get(`${API_URL}/v1/projects?token=${token}`);
  },
};
