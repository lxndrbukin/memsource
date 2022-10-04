<template>
  <div class="project-info">
    <h3>{{ projectInfo.name }}</h3>
    <div class="project-info_main">
      <div class="project-info_main-box">
        <!-- <span class="project-info_main-box-header">{{ box.name }}</span>
        <span class="project-info_main-box-info">{{ box.prop }}</span> -->
        <table>
          <tr v-if="projectInfo" v-for="box in infoBoxes" :key="box.name">
            <td>{{ box.name }}</td>
            <td>{{ box.prop }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfo',
  props: ['projectInfo'],
  data() {
    return {
      boxes: []
    }
  },
  computed: {
    infoBoxes() {
      const { projectInfo } = this;
      this.boxes = [
        {
          name: 'ID',
          prop: projectInfo.internalId
        },
        {
          name: 'Created by',
          prop: `${projectInfo.owner.firstName} ${projectInfo.owner.lastName}`
        },
        {
          name: 'Created',
          prop: projectInfo.dateCreated
        },
        {
          name: 'Target Language',
          prop: projectInfo.targetLangs[0].toUpperCase()
        },
        {
          name: 'Source Language',
          prop: projectInfo.sourceLang.toUpperCase()
        },
        {
          name: 'Machine Translation Engine',
          prop: projectInfo.mtSettingsPerLanguageList ? projectInfo.mtSettingsPerLanguageList[0].machineTranslateSettings.name : 'Disabled'
        },
      ]
      return this.boxes;
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.project-info {
  width: 100%;

  .project-info_main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .project-info_main-box {
      display: flex;
      height: fit-content;

      table {

        tr {
          td {
            width: fit-content;
            
            &:nth-of-type(1) {
              text-align: right
            }
            &:nth-of-type(2) {
              text-align: left
            }
          }
        }
      }

      .project-info_main-box-header {
        font-size: 15px;
        color: $lighter-dark;
        margin: 1px 10px 0 0;
        padding: 5px 0 0px 0;
        height: fit-content;
      }

      .project-info_main-box-info {
        padding: 5px 0 6px 0;
      }
    }
  }
}
</style>