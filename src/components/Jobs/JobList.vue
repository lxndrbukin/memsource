<template>
  <div class="jobs">
    <div class="jobs-filter">
      <select
        class="jobs-category"
        @change="(e) => setCategory(e.target.value.toUpperCase())"
      >
        <option
          v-for="option in jobOptions"
          :selected="option.toUpperCase() === currentCategory"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <div class="jobs-search">
        <input type="text" />
        <i class="bi bi-search"></i>
      </div>
    </div>
    <div class="jobs-inbox_wrapper">
      <div class="jobs-inbox">
        <table class="table">
          <tr class="table-row">
            <th v-for="(header, idx) in tableHeaders" :key="idx">
              {{ header }}
            </th>
          </tr>
          <JobListItem
            v-for="job in jobList"
            :key="job.filename"
            :job="job"
            @click="selectJob(job)"
          />
        </table>
      </div>
      <div class="job-info_wrapper">
        <JobInfo
          v-if="selectedJob"
          :jobInfo="selectedJob"
          :uid="selectedJob.uid"
        />
        <JobInfoDummy v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import JobListItem from './JobListItem.vue';
import JobInfo from './JobInfo.vue';
import JobInfoDummy from './JobInfoDummy.vue';

export default {
  name: 'JobList',
  data() {
    return {
      isLoaded: false,
      tableHeaders: ['Name', 'Deadline'],
      jobOptions: ['All', 'New', 'Accepted', 'Completed'],
      selectedJob: null,
      currentCategory: localStorage.getItem('jobCategory')
        ? localStorage.getItem('jobCategory').toUpperCase()
        : 'ALL',
    };
  },
  methods: {
    ...mapActions(['fetchProjectsAndJobs']),
    selectJob(job) {
      this.selectedJob = JSON.parse(JSON.stringify(job));
    },
    setCategory(category) {
      localStorage.setItem('jobCategory', category);
      const jobCategory = localStorage.getItem('jobCategory');
      this.currentCategory = jobCategory;
      if (jobCategory) {
        this.fetchProjectsAndJobs(jobCategory);
      }
    },
    selectedCategory(option, currentCategory) {
      option.toLowerCase() === currentCategory.toLowerCase() ? true : false;
    },
  },
  computed: {
    ...mapGetters(['jobList']),
  },
  created() {
    if (this.jobList.length === 0) {
      this.fetchProjectsAndJobs();
    } else if (!localStorage.getItem('jobCategory')) {
      this.fetchProjectsAndJobs();
    }
  },
  components: { JobListItem, JobInfo, JobInfoDummy },
};
</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/variables.scss';

.jobs {
  height: 100%;
  display: flex;
  flex-direction: column;

  .jobs-filter {
    width: 100%;
    height: 30px;
    border-bottom: $border;
    background-color: $lighter-grey;
    display: flex;

    .jobs-category {
      height: 30px;
      background: transparent;
      border: none;
      text-align: center;

      &:focus {
        outline: none;
      }
    }

    .jobs-search {
      width: fit-content;
      margin: auto 15px auto auto;
      position: relative;

      input {
        height: 24px;

        &:focus {
          outline: none;
        }
      }

      i {
        position: absolute;
        right: 0;
        margin: 5px;
      }
    }
  }

  .jobs-inbox_wrapper {
    display: flex;
    width: 100%;
    height: 100%;

    .jobs-inbox {
      width: 40%;
      overflow-y: scroll;

      .table {
        width: 100%;
      }
    }
    .job-info_wrapper {
      width: 60%;
      display: flex;
    }
  }
}
</style>
