import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { store } from './store';
import App from './App.vue';
import Home from './components/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Home },
  { path: '/jobs', component: Home },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
