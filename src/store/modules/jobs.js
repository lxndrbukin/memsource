import memsourceJobs from '../../assets/api/memsource/jobs';

const state = {
  jobList: [],
};

const getters = {
  jobList: (state) => state.jobList,
};

const actions = {
  fetchJobs: async ({ rootState, commit }, token) => {
    const projectList = JSON.parse(
      JSON.stringify(rootState.projects.projectList)
    );
    const jobList = [];
    await projectList.map(async (project) => {
      memsourceJobs.fetchJobs(project.uid, token).then((res) => {
        res.data.content.map((job) => {
          jobList.push(job);
        });
      });
    });
    commit('setJobList', jobList);
  },
};

const mutations = {
  setJobList: (state, jobList) => {
    state.jobList = jobList;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
