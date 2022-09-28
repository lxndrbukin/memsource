import memsourceJobs from '../../assets/api/memsource/jobs';
import memsourceProjects from '../../assets/api/memsource/projects';

const state = {
  jobList: [],
};

const getters = {};

const actions = {
  fetchJobs: async ({ rootState, commit }, token) => {
    const projectList = JSON.parse(
      JSON.stringify(rootState.projects.projectList)
    );
    const jobList = [];
    await projectList.map(async (project) => {
      await memsourceJobs.fetchJobs(project.uid, token).then((res) => {
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
