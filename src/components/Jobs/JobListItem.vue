<template>
  <tr v-if="job.filename.toLowerCase().includes(searchReq.toLowerCase())" class="table-row">
    <td>{{ truncatedString(job.filename) }}</td>
    <td v-html="deadline(job.dateDue)"></td>
  </tr>
</template>

<script>
import { date } from '../../assets/functions/date';

export default {
  name: 'JobListItem',
  props: ['job', 'searchReq'],
  methods: {
    truncatedString(string) {
      if (string.length > 50) {
        return `${string.substring(0, 49)}...`;
      }
      return string;
    },
    deadline(newDate) {
      return date(newDate);
    },
  },
};
</script>
