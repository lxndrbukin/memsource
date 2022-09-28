import memsourceProjects from '../../assets/api/memsource/projects';
import memsourceJobs from '../../assets/api/memsource/jobs';

const state = {
  projectList: [],
  jobList: [],
};

const getters = {
  projectList: (state) => state.projectList,
  jobList: (state) => state.jobList,
};

const actions = {
  fetchProjectsAndJobs: async ({ rootState, commit }) => {
    const response = await memsourceProjects.fetchProjects(
      rootState.auth.token
    );
    const projects = response.data.content;
    const projectList = [];
    const jobList = [];
    if (projects.length !== 0) {
      projects.map(async (project) => {
        projectList.push(project);
        const res = await memsourceJobs.fetchJobs(
          project.uid,
          rootState.auth.token
        );
        const jobsContent = res.data.content;
        await jobsContent.map((job) => {
          jobList.push(job);
          project['jobs'] = [];
          project['jobs'].push(job);
        });
      });
    }
    commit('setJobList', jobList);
    commit('setProjectList', projectList);
  },
};

const mutations = {
  setProjectList: (state, projectList) => {
    state.projectList = projectList;
  },
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
