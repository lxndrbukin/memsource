import axios from 'axios';
import memsourceProjects from '../../assets/api/memsource/projects';
import memsourceJobs from '../../assets/api/memsource/jobs';

const state = {
  projectList: [],
  jobList: [],
  jobFilter: localStorage.getItem('jobFilter') || '',
};

const getters = {
  projectList: (state) => state.projectList,
  jobList: (state) => state.jobList,
};

const actions = {
  fetchProjectsAndJobs: async ({ rootState, commit, state }) => {
    const response = await memsourceProjects.fetchProjects(
      rootState.auth.token
    );
    const projects = response.data.content;
    const projectList = [];
    projects.map((project) => {
      projectList.push(project);
    });
    projectList.map(async (project) => {
      await memsourceJobs
        .fetchJobs(project.uid, state.jobFilter, rootState.auth.token)
        .then((jobs) => {
          const jobList = jobs.data.content;
          jobList.map(async (job) => {
            await axios
              .get(
                `https://cloud.memsource.com/web/api2/v1/projects/${project.uid}/jobs/${job.uid}?token=${rootState.auth.token}`
              )
              .then((res) => commit('setJobList', res.data));
          });
        });
    });
    commit('setProjectList', projectList);
  },
};

const mutations = {
  setProjectList: (state, projectList) => {
    state.projectList = projectList;
  },
  setJobList: (state, job) => {
    state.jobList.push(job);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
