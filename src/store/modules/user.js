import memsourceApi from '../../assets/api/memsource';

const state = {
  user: {},
};

const getters = {
  user: (state) => state.user,
};

const actions = {
  fetchUser: async ({ rootState, commit }) => {
    const { uid, token } = rootState.auth;
    const user = await memsourceApi.fetchUser(uid, token);
    const { firstName, lastName, role, email } = user.data;
    commit('setUser', {
      firstName,
      lastName,
      email,
      role,
    });
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
