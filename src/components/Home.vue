<template>
  <div>
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
