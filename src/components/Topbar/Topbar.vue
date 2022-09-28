<template>
  <div class="topbar">
    <div class="topbar_section-name">Section</div>
    <div class="topbar_notifications"><i class="bi bi-bell"></i></div>
    <TopbarUser v-if="isLoggedIn" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { mapActions } from 'vuex';
import TopbarUser from './TopbarUser.vue';

export default {
  name: 'Topbar',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  components: {
    TopbarUser,
  },
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.topbar {
  height: 70px;
  width: 100%;
  border-bottom: $border;
  box-shadow: $box-shadow;
  display: flex;

  .topbar_section-name {
    margin: auto auto auto 15px;
    font-size: 20px;
  }
}
</style>
