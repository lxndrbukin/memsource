<template>
  <div>
    <a href="#" @click="login">Login</a>
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: mapActions(['login', 'logout']),
};
</script>
