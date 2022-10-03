<template>
  <div class="app-wrapper">
    <Sidebar />
    <div class="container">
      <Topbar />
      <div class="view-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import './assets/SCSS/scrollbar.scss';
import { sidebarLinks } from './assets/sidebarLinks';
import Sidebar from './components/Sidebar/Sidebar.vue';
import Topbar from './components/Topbar/Topbar.vue';

export default {
  data() {
    return {
      tabTitle: '',
    };
  },
  name: 'App',
  components: {
    Sidebar,
    Topbar,
  },
  watch: {
    $route(to, from) {
      for (let i = 0; i < sidebarLinks.length; i++) {
        if (window.location.pathname === sidebarLinks[i].path) {
          this.tabTitle = sidebarLinks[i].name;
          document.title = `bet365 Memsource - ${this.tabTitle}`;
        }
      }
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Inter', sans-serif;

  a {
    text-decoration: none;
  }
}

#app {
  height: 100vh;
  overflow: hidden;

  .app-wrapper {
    display: flex;
    height: 100%;

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;

      .view-container {
        height: 100%;
      }
    }
  }
}
</style>
