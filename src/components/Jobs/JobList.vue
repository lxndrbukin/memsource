<template>
  <div class="jobs">
    <JobFilter
      :currentCategory="currentCategory"
      :sortByOption="sortByOption"
      @search="search"
      @setCategory="setCategory"
      @setSortBy="setSortBy"
    />
    <div class="jobs-inbox_wrapper">
      <div class="jobs-inbox">
        <table class="table">
          <tr class="table-row">
            <th v-for="(header, idx) in tableHeaders" :key="idx" >
              {{ header }}
            </th>
          </tr>
          <JobListItem
            v-for="job in sortedJobList"
            :key="job.uid"
            :job="job"
            @click="selectJob(job)"
            :searchReq="searchRequest"
          />
        </table>
      </div>
      <div class="job-info_wrapper">
        <JobInfo
          v-if="selectedJob"
          :jobInfo="selectedJob"
          :project="currentProject"
          :uid="selectedJob.uid"
        />
        <JobInfoDummy v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import JobFilter from './JobFilter.vue';
import JobListItem from './JobListItem.vue';
import JobInfo from './JobInfo.vue';
import JobInfoDummy from './JobInfoDummy.vue';

export default {
  name: 'JobList',
  data() {
    return {
      tableHeaders: ['Deadline', 'Name', 'Step'],
      searchRequest: '',
      sortByOption: localStorage.getItem('sortJobsBy'),
      selectedJob: null,
      currentProject: null,
      currentCategory: localStorage.getItem('jobCategory')
        ? localStorage.getItem('jobCategory').toUpperCase()
        : 'ALL',
    };
  },
  computed: {
    ...mapGetters(['jobList', 'projectList']),
    sortedJobList() {
      const { jobList, sortByOption } = this;
      if (sortByOption === 'Name') {
        return jobList.sort((a, b) => a.filename.localeCompare(b.filename));
      } else if (sortByOption === 'Created') {
        return jobList.sort((a, b) =>
          a.dateCreated.localeCompare(b.dateCreated)
        );
      } else {
        return jobList;
      }
    },
  },
  methods: {
    ...mapActions(['fetchProjectsAndJobs']),
    selectJob(job) {
      this.selectedJob = JSON.parse(JSON.stringify(job));
      const projectList = JSON.parse(JSON.stringify(this.projectList));
      for (let i = 0; i < projectList.length; i++) {
        projectList[i].jobs.filter((job) => {
          if (job.filename === this.selectedJob.filename) {
            this.currentProject = projectList[i];
          }
        });
      }
    },
    setCategory(category) {
      localStorage.setItem('jobCategory', category);
      const jobCategory = localStorage.getItem('jobCategory');
      this.currentCategory = jobCategory;
      if (jobCategory) {
        this.fetchProjectsAndJobs(jobCategory);
      }
    },
    search(searchRequest) {
      this.searchRequest = searchRequest;
      console.log(this.searchRequest);
      return this.searchRequest;
    },
    setSortBy(sort) {
      localStorage.setItem('sortJobsBy', sort);
      this.sortByOption = sort;
      return this.sortByOption;
    },
  },
  created() {
    if (this.jobList.length === 0) {
      this.fetchProjectsAndJobs();
    } else if (!localStorage.getItem('jobCategory')) {
      this.fetchProjectsAndJobs();
    }
  },
  components: { JobFilter, JobListItem, JobInfo, JobInfoDummy },
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.jobs {
  height: 100%;
  display: flex;
  flex-direction: column;

  .jobs-filter {
    width: 100%;
    height: 35px;
    border-bottom: $border;
    background-color: $lighter-grey;
    display: flex;

    .jobs-category {
      margin: auto 2px;
      font-size: 14px;

      select {
        height: 30px;
        border: $border;
        border-radius: 5px;

        &:focus {
          outline: none;
        }
      }
    }

    .jobs-refresh {
      margin: auto 2px;

      button {
        height: 30px;
        border-radius: 5px;
        border: $border;

        i {
          font-size: 15px;
        }
      }
    }

    .jobs-sortby {
      margin: auto 2px;
      font-size: 14px;

      select {
        height: 30px;
        border-radius: 5px;
        border: $border;

        &:focus {
          outline: none;
        }
      }
    }

    .jobs-search {
      width: fit-content;
      margin: auto 15px auto auto;
      position: relative;

      input {
        height: 24px;
        width: 200px;
        border: $border;

        &:focus {
          outline: none;
        }
      }

      i {
        position: absolute;
        right: 0;
        margin: 4px;
      }
    }
  }

  .jobs-inbox_wrapper {
    display: flex;
    width: 100%;
    height: calc(100vh - 107px);

    .jobs-inbox {
      height: 100%;
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
