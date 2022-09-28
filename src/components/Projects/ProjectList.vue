<template>
  <div class="projects">
    <div class="projects-table">
      <table class="table">
        <tr class="table-row">
          <th v-for="(header, idx) in tableHeaders" :key="idx">{{ header }}</th>
        </tr>
        <ProjectListItem
          v-for="(project, idx) in projectList"
          :key="idx"
          :project="project"
        />
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProjectListItem from './ProjectListItem.vue';

export default {
  name: 'ProjectList',
  computed: {
    ...mapGetters(['token', 'projectList']),
    tableHeaders() {
      return ['Name', 'Created', 'Status', 'Due', 'Owner'];
    },
  },
  methods: {
    ...mapActions(['fetchProjectsAndJobs']),
  },
  created() {
    if (this.projectList.length === 0) {
      this.fetchProjectsAndJobs();
    }
  },
  components: {
    ProjectListItem,
  },
};
</script>
