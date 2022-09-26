<template>
  <form v-if="!isLoggedIn" @submit="submit">
    <div class="form-field">
      <label>Username</label>
      <input type="text" name="username" />
    </div>
    <div class="form-field">
      <label>Password</label>
      <input type="password" name="password" />
    </div>
    <input type="submit" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  methods: {
    ...mapActions(['login']),
    submit(e) {
      e.preventDefault();
      const username = e.target.elements[0].value;
      const password = e.target.elements[1].value;
      this.login({username, password});
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>
