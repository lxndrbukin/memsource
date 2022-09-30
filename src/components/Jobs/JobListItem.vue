<template>
  <tr class="table-row">
    <td>{{ truncatedString(job.filename) }}</td>
    <td>{{ date() }}</td>
  </tr>
</template>

<script>
export default {
  name: 'JobListItem',
  props: ['job'],
  methods: {
    truncatedString(string) {
      if (string.length > 50) {
        return `${string.substring(0, 49)}...`;
      }
      return string;
    },
    date() {
      const jsonDate = new Date(this.job.dateDue);
      const day = jsonDate.getDate();
      const month =
        jsonDate.getMonth() + 1 < 10
          ? `0${jsonDate.getMonth() + 1}`
          : jsonDate.getMonth() + 1;
      const year = jsonDate.getFullYear();
      const date = `${day}/${month}/${year}`;
      return date;
    },
  },
};
</script>
