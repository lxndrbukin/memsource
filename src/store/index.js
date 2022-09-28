import { createStore } from 'vuex';
import auth from './modules/auth';
import users from './modules/users';
import projects from './modules/projects';
import jobs from './modules/jobs';

export const store = createStore({
  modules: {
    auth,
    users,
    projects,
    jobs,
  },
});
