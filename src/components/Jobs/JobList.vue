<template>
  <div>Job List</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'JobList',
  methods: {
    ...mapActions(['fetchJobs', 'fetchProjects']),
  },
  computed: {
    ...mapGetters(['token']),
  },
  created() {
    this.fetchProjects(this.token);
    this.fetchJobs();
  },
};
</script>
