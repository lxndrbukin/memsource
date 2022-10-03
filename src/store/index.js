import { createStore } from 'vuex';
import auth from './modules/auth';
import users from './modules/users';
import projects from './modules/projects';

export const store = createStore({
  modules: {
    auth,
    users,
    projects,
  },
});
