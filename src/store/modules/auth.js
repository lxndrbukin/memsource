import memsourceApi from '../../assets/api/memsource';

const actions = {
  login: () => {
    memsourceApi.login();
  },
};

export default {
  actions,
};
