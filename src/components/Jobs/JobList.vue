<template>
  <div class="jobs">
    <div class="jobs-table">
      <div class="jobs-filter">
        <button>New</button>
        <button>Accepted</button>
        <button>Completed</button>
      </div>
      <table class="table">
        <tr class="table-row">
          <th v-for="(header, idx) in tableHeaders" :key="idx">{{ header }}</th>
        </tr>
        <JobListItem
          v-for="job in jobList"
          :key="job.filename"
          :job="job"
          @click="selectJob(job)"
        />
      </table>
    </div>
    <JobInfo :jobInfo="selectedJob" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import JobListItem from './JobListItem.vue';
import JobInfo from './JobInfo.vue';

export default {
  name: 'JobList',
  data() {
    return {
      isLoaded: false,
      tableHeaders: ['Name', 'Deadline'],
      selectedJob: null,
    };
  },
  methods: {
    ...mapActions(['fetchProjectsAndJobs']),
    selectJob(job) {
      this.selectedJob = JSON.parse(JSON.stringify(job));
      console.log(this.selectedJob);
    },
  },
  computed: {
    ...mapGetters(['jobList']),
  },
  created() {
    if (this.jobList.length === 0) {
      this.fetchProjectsAndJobs();
    }
  },
  components: { JobListItem, JobInfo },
};
</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/variables.scss';

.jobs {
  height: 100%;
  display: flex;

  .jobs-filter {
    width: 100%;
    border-bottom: $border;
    background-color: $lighter-grey;

    button {
      width: 80px;
      height: 30px;
      border: none;
    }
  }

  .jobs-table {
    width: fit-content;
    border-right: $border;
  }
}
</style>
