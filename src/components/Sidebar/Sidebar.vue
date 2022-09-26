<template>
  <div class="sidebar">
    <div class="sidebar_logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwgsdwgSd4hZaChAz-dg2tiZZ2pVmPKo1P6PWiMLYf9vPnmooWvRusxMiWnFwhLoe--g&usqp=CAU"
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
  width: 70px;
  height: 100%;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;

  .sidebar_logo {
    margin: 10px auto;
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
    margin: 33vh auto auto auto;

    .sidebar_menu-btn {
      width: 50px;
      height: 50px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 5px;
      font-size: 13px;
      text-align: center;

      i {
        margin: auto;
        font-size: 20px;
      }
    }
  }
}
</style>
