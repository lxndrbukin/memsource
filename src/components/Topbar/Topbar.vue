<template>
  <div class="topbar">
    <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
    <TopbarUser v-if="isLoggedIn" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import TopbarUser from './TopbarUser.vue';

export default {
  name: 'Topbar',
  methods: {
    ...mapActions(['logout', 'fetchUser']),
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  components: {
    TopbarUser,
  },
};
</script>

<style lang="scss">
.topbar {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #eee;
  box-shadow: 1px 1px 1px #eee;
}
</style>
