<template>
  <div class="job-select-text">Please select a Task</div>
</template>

<script>
export default {
  name: 'JobInfoDummy',
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.job-select-text {
  height: fit-content;
  width: fit-content;
  margin: auto;
  font-size: 20px;
  padding: 30px;
  background-color: $lighter-grey;
  border: $border;
  border-radius: 10px;
}
</style>
