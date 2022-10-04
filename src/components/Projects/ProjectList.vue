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
          @click="selectProject(project)"
        />
      </table>
    </div>
    <div class="project-info_wrapper">
      <ProjectInfo 
        v-if="selectedProject" 
        :projectInfo="selectedProject"
        
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProjectListItem from './ProjectListItem.vue';
import ProjectInfo from './ProjectInfo.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      selectedProject: null, 
    }
  },
  computed: {
    ...mapGetters(['token', 'projectList']),
    tableHeaders() {
      return ['Name', 'Created', 'Status', 'Due', 'Owner'];
    },
  },
  methods: {
    ...mapActions(['fetchProjectsAndJobs']),
    selectProject(project) {
      this.selectedProject = JSON.parse(JSON.stringify(project));
    }
  },
  created() {
    if (this.projectList.length === 0) {
      this.fetchProjectsAndJobs();
    }
  },
  components: {
    ProjectListItem, ProjectInfo
  },
};
</script>

<style lang="scss">
.projects {
  display: flex;
  height: 100%;

  .projects-table {
    overflow-y: scroll;
  }

  .project-info_wrapper {
    width: 60%;
  }
}
</style>