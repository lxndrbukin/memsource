import memsourceProjects from '../../assets/api/memsource/projects';
import memsourceJobs from '../../assets/api/memsource/jobs';

const state = {
  projectList: [],
  jobList: [],
  jobCategory: localStorage.getItem('jobCategory'),
};

const getters = {
  projectList: (state) => state.projectList,
  jobList: (state) => state.jobList,
  jobCategory: (state) => state.jobCategory,
};

const actions = {
  fetchProjectsAndJobs: async ({ rootState, commit, state }, category) => {
    const response = await memsourceProjects.fetchProjects(
      rootState.auth.token
    );
    const projects = response.data.content;
    const projectList = [];
    projects.map((project) => {
      projectList.push(project);
    });
    projectList.map(async (project) => {
      commit('clearJobList');
      if (localStorage.getItem('jobCategory')) {
        commit('setJobCategory', localStorage.getItem('jobCategory'));
      } else {
        commit('setJobCategory', category);
      }
      await memsourceJobs
        .fetchJobs(project.uid, state.jobCategory, rootState.auth.token)
        .then((jobs) => {
          const jobList = jobs.data.content;
          project['jobs'] = jobList;
          if (state.jobCategory === 'ALL' || !state.jobCategory) {
            commit('setJobCategory', 'ALL');
            jobList.map(async (job) => {
              commit('setJobList', job);
            });
          } else {
            jobList
              .filter((job) => job.status === state.jobCategory)
              .map(async (job) => {
                commit('setJobList', job);
              });
          }
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
  setJobCategory: (state, category) => {
    state.jobCategory = category;
  },
  clearJobList: (state) => {
    state.jobList = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
