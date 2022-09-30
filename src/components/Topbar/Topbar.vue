<template>
  <div class="topbar">
    <div class="topbar_section-name">{{ section }}</div>
    <div class="topbar_notifications"><i class="bi bi-bell"></i></div>
    <TopbarUser v-if="isLoggedIn" />
  </div>
</template>

<script>
import { sidebarLinks } from '../../assets/sidebarLinks';
import { mapGetters } from 'vuex';
// import { mapActions } from 'vuex';
import TopbarUser from './TopbarUser.vue';

export default {
  name: 'Topbar',
  data() {
    return {
      section: '',
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  components: {
    TopbarUser,
  },
  watch: {
    $route(to, from) {
      for (let i = 0; i < sidebarLinks.length; i++) {
        if (window.location.pathname === sidebarLinks[i].path) {
          this.section = sidebarLinks[i].name;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.topbar {
  height: 70px;
  width: 100%;
  border-bottom: $border;
  display: flex;

  .topbar_section-name {
    margin: auto auto auto 15px;
    font-size: 20px;
  }
}
</style>
