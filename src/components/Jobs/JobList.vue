<template>
  <div class="jobs">
    <div class="jobs-table">
      <table class="table">
        <tr class="table-row">
          <th v-for="(header, idx) in tableHeaders" :key="idx">{{ header }}</th>
        </tr>
        <JobListItem
          v-for="(job, idx) in jobList"
          :key="job.filename"
          :job="job"
        />
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import JobListItem from './JobListItem.vue';

export default {
    name: "JobList",
    data() {
      return {
        isLoaded: false,
      }
    },
    methods: {
      ...mapActions(["fetchProjectsAndJobs"]),
    },
    computed: {
      ...mapGetters(["jobList"]),
      tableHeaders() {
        return ['Name', 'Status', 'Due date', 'Project', 'Source', 'Target', 'Created']
      },
      fetchedList() {
        this.jobList.length !== 0 ? this.jobList : [];
      }
    },
    created() {
      console.log(this.$store.getters.jobList)
      if (this.jobList.length === 0) {
        this.fetchProjectsAndJobs();
      }
    },
    components: { JobListItem }
};
</script>
