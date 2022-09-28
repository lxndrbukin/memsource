<template>
  <div class="app-wrapper">
    <Sidebar />
    <div class="container">
      <Topbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue';
import Topbar from './components/Topbar/Topbar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Topbar,
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
  width: 100vw;

  .app-wrapper {
    display: flex;
    height: 100%;

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
