<template>
  <div class="sidebar">
    <router-link to="/" class="sidebar_logo">
      <img
        src="https://play-lh.googleusercontent.com/aGzbvzSPjyNSIt5pXw1WBJaLM1PvpLBvlJnMr7PWnbHFbTvBYStf42ZkpU8GrdXuIIoK"
        alt="Memsource"
        class="bet365-logo"
      />
      <img
        src="../../assets/images/memsource-logo.png"
        alt="Memsource"
        class="memsource-logo"
      />
    </router-link>
    <div class="sidebar_menu">
      <SidebarLink
        v-for="(link, idx) in sidebarLinks"
        :key="idx"
        :link="link"
      />
    </div>
  </div>
</template>

<script>
import { sidebarLinks } from '../../assets/sidebarLinks';
import SidebarLink from './SidebarLink.vue';

export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarLinks,
    };
  },
  components: {
    SidebarLink,
  },
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.sidebar {
  width: 80px;
  height: 100%;
  border-right: 1px solid $light-grey;
  display: flex;
  flex-direction: column;
  background-color: $lighter-grey;

  .sidebar_logo {
    margin: 10px auto;
    width: fit-content;
    position: relative;
    height: 50px;
    width: 50px;

    .bet365-logo {
      height: 50px;
      width: 50px;
      border-radius: 10px;
    }

    .memsource-logo {
      // width: 20px;
      margin-left: -5px;
      margin-top: -15px;
    }
  }

  .sidebar_menu {
    display: flex;
    flex-direction: column;
    margin: 33vh auto auto auto;

    .sidebar_menu-btn {
      width: 40px;
      height: 40px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 5px;
      font-size: 11px;
      text-align: center;
      color: $base-dark;
      margin: 5px;

      i {
        margin: auto;
        font-size: 20px;
      }
    }
  }
}
</style>
