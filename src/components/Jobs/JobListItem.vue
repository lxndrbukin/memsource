<template>
  <tr
    v-if="job.filename.toLowerCase().includes(searchReq.toLowerCase())"
    class="table-row"
  >
    <td v-html="deadline(job.dateDue)"></td>
    <td>{{ truncatedString(job.filename) }}</td>
    <td>{{ job.workflowStep.name }}</td>
  </tr>
</template>

<script>
import { date } from '../../assets/functions/date';

export default {
  name: 'JobListItem',
  props: ['job', 'searchReq'],
  methods: {
    truncatedString(string) {
      if (string.length > 60) {
        return `${string.substring(0, 59)}...`;
      }
      return string;
    },
    deadline(newDate) {
      return date(newDate);
    },
  },
};
</script>
