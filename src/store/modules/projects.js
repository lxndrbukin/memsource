import memsourceProjects from '../../assets/api/memsource/projects';

const state = {
  projectList: [],
};

const getters = {
  projectList: (state) => state.projectList,
};

const actions = {
  fetchProjects: async ({ rootState, commit }) => {
    const projects = await memsourceProjects.fetchProjects(
      rootState.auth.token
    );
    commit('setProjectList', projects.data.content);
  },
};

const mutations = {
  setProjectList: (state, projectList) => {
    state.projectList = projectList;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
