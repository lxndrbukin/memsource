<template>
  <div class="topbar">
    <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'Topbar',
  methods: {
    ...mapActions(['logout']),
    loggedIn() {
      if (this.isLoggedIn) {
        console.log('hi')
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  created() {
    this.loggedIn()
  }
}
</script>

<style lang='scss'>
.topbar {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #eee;
}
</style>