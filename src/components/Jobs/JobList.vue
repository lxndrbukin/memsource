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
    ...mapGetters(['token', 'projectList']),
  },
  created() {
    this.fetchProjects(this.token);
  },
  mounted() {
    this.fetchJobs(this.token);
  },
};
</script>
