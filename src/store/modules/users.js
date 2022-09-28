import memsourceUser from '../../assets/api/memsource/users';

const state = {
  currentUser: {},
};

const getters = {
  currentUser: (state) => state.currentUser,
};

const actions = {
  fetchUser: async ({ rootState, commit }) => {
    const { uid, token } = rootState.auth;
    const user = await memsourceUser.fetchUser(uid, token);
    const { firstName, lastName, role, email } = user.data;
    commit('setCurrentUser', {
      firstName,
      lastName,
      email,
      role,
    });
  },
};

const mutations = {
  setCurrentUser: (state, user) => {
    state.currentUser = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
