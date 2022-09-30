import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { store } from './store';
import './assets/SCSS/classes.scss';
import App from './App.vue';
import Home from './components/Home.vue';
import ProjectList from './components/Projects/ProjectList.vue';
import JobList from './components/Jobs/JobList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: ProjectList },
  { path: '/jobs', component: JobList },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');
