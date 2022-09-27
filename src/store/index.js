import { createStore } from 'vuex';
import auth from './modules/auth';
import user from './modules/user';

export const store = createStore({
  modules: {
    auth,
    user,
  },
});
