<template>
  <div class="job-info">
    <div class="job-info_main">
      <div class="job-info_basic">
        <div class="job-info_basic-line">
          <span class="job-info_basic-line_header">Deadline:</span>
          <span
            class="job-info_basic-line_info"
            v-html="deadline(jobInfo.dateDue)"
          ></span>
        </div>
        <div class="job-info_basic-line">
          <span class="job-info_basic-line_header">Language:</span>
          <span class="job-info_basic-line_info"
            >EN <i class="bi bi-arrow-right"></i>
            {{ jobInfo.targetLang.toUpperCase() }}</span
          >
        </div>
      </div>
      <div class="job-info_message">
        <span>
          <h5>Hello Team,</h5>
          <p>
            Could you please translate the below file(s) as part of the
            <b>[projectName]</b> project.
          </p>
        </span>
      </div>
      <div v-if="jobInfo.uid" class="job-info_files">
        <b>Files:</b>
        <div class="job-info_file-links">
          <a target="_blank" :href="translationUrl"
            ><b>{{ jobInfo.filename }}</b></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { date } from '../../assets/functions/date';

export default {
  name: 'JobDetails',
  data() {
    return {
      translationUrl: `https://cloud.memsource.com/web/job/${this.jobInfo.uid}/translate`,
    };
  },
  props: ['jobInfo'],
  methods: {
    deadline(newDate) {
      return date(newDate);
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.job-info {
  width: 100%;
  height: 100%;
  padding: 10px;

  .job-info_name {
    text-align: center;
  }

  .job-info_basic {
    border: $border;
    border-radius: 10px;
    background-color: $lighter-grey;
    width: fit-content;
    padding: 10px;
    width: 220px;
  }

  .job-info_basic-line {
    padding: 5px;
    display: flex;
    flex-direction: column;

    .job-info_basic-line_header {
      width: 120px;
      font-weight: bold;
    }

    .job-info_basic-line_info {
    }
  }

  .job-info_message {
    h5 {
      width: fit-content;
    }

    p {
      width: fit-content;
    }
  }

  .job-info_files {
    .job-info_file-links {
      padding: 10px;
      background-color: $lighter-grey;
      border: $border;
      border-radius: 10px;
    }
  }
}
</style>
