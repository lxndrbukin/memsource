import memsourceApi from '../../assets/api/memsource';

const state = {
  uid: localStorage.getItem('uid'),
  token: localStorage.getItem('token'),
};

const actions = {
  login: ({ commit }) => {
    memsourceApi.login();
    commit('setToken', localStorage.getItem('token'));
    commit('setUId', localStorage.getItem('uid'));
  },
  logout: ({ commit }) => {
    memsourceApi.logout();
    commit('setToken', localStorage.removeItem('token'));
    commit('setUId', localStorage.removeItem('uid'));
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
  setUId: (state, uid) => {
    state.uid = uid;
  },
};

export default {
  state,
  actions,
  mutations,
};
