<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import LoginForm from './LoginForm.vue';

export default {
  name: 'Home',
  methods: mapActions(['login', 'logout']),
  components: {
    LoginForm
  }
};
</script>

<style lang="scss">
.login {
  display: flex;
  margin: auto;
}
</style>