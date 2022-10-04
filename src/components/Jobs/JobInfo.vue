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
            >{{ project.sourceLang.toUpperCase() }}
            <i class="bi bi-arrow-right"></i>
            {{ jobInfo.targetLang.toUpperCase() }}</span
          >
        </div>
        <div class="job-info_basic-line">
          <span class="job-info_basic-line_header">Step:</span>
          <span class="job-info_basic-line_info">
            {{ jobInfo.workflowStep.name }}</span
          >
        </div>
      </div>
      <div class="job-info_message">
        <h5>Hello Team,</h5>
        <p>
          Could you please complete a <b>{{ jobInfo.workflowStep.name }}</b> of the below file(s) as part of the
          <b>{{ project.name }}</b> project?
        </p>
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
  props: ['jobInfo', 'project'],
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
    width: fit-content;
    padding: 10px;
    width: calc(100% - 20px);
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    
  }

  .job-info_basic-line {
    padding: 5px;
    display: flex;
    flex-direction: column;

    .job-info_basic-line_header {
      width: 120px;
      font-weight: bold;
      margin: 3px 0 3px 0;
      color: red;
    }

    .job-info_basic-line_info {
    }
  }

  .job-info_message {
    padding: 10px;
    margin: 10px 0 10px 0;
    width: calc(100% - 20px);

    h5 {
      width: fit-content;
    }

    p {
      width: fit-content;
    }
  }

  .job-info_files {
    padding: 10px;
    .job-info_file-links {
      padding: 10px;
      background-color: $lighter-grey;
      border: $border;
      border-radius: 10px;
    }
  }
}
</style>
