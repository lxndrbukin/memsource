import axios from 'axios';

const API_URL = 'https://cloud.memsource.com/web/api2';

export default {
  fetchJobs: (projectUid, category, token) => {
    return axios.get(
      `${API_URL}/v1/projects/${projectUid}/jobs?token=${token}`
    );
  },
  fetchTranslationTasks: (projectUid, category, token) => {
    return axios.get(
      `${API_URL}/v1/projects/${projectUid}/jobs?token=${token}`
    );
  },
  fetchProofreadTasks: (projectUid, category, token) => {
    return axios.get(
      `${API_URL}/v1/projects/${projectUid}/jobs?token=${token}&workflowLevel=2`
    );
  },
};
