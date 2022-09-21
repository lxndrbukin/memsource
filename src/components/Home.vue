<template>
  <div>
    <a href="#" @click="login">Login</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: mapActions(['login']),
};
</script>
