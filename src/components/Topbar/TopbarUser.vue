<template>
  <div class="topbar-user">
    <div>{{ user.firstName[0] }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'TopbarUser',
  methods: {
    ...mapActions(['fetchUser']),
  },
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    this.fetchUser();
  },
};
</script>
