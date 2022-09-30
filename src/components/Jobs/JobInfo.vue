<template>
  <div v-if="jobInfo" class="job-info">
    <div>{{ jobInfo.filename }}</div>
  </div>
  <div class="job-select-text" v-else>Please select a Task</div>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['jobInfo'],
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.job-info {
  width: 100%;
  height: 100%;
}

.job-select-text {
  height: fit-content;
  margin: auto;
}
</style>
