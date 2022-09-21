<template>
  <div class="sidebar">
    <div class="sidebar_logo">
      <img
        src="https://pbs.twimg.com/profile_images/1053286305042448384/uNYzl0ig_400x400.jpg"
        alt="Memsource"
      />
    </div>
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
  created() {
    console.log(sidebarLinks);
  },
  components: {
    SidebarLink,
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 60px;
  height: 100%;

  .sidebar_logo {
    margin: auto;
    width: fit-content;

    img {
      height: 50px;
      width: 50px;
      border-radius: 5px;
    }
  }

  .sidebar_menu {
    display: flex;
    flex-direction: column;

    .sidebar_menu-btn {
      width: 40px;
      height: 40px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      margin: auto;

      i {
        margin: auto;
        font-size: 20px;
      }
    }
  }
}
</style>
