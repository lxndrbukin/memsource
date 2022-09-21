<template>
  <div class="app-wrapper">
    <Sidebar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;

  .app-wrapper {
    display: flex;
    height: 100%;
  }
}
</style>
