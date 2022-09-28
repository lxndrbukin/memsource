<template>
  <tr class="table-row">
    <td>{{ job.filename }}</td>
    <td>{{ date }}</td>
    <td></td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: 'JobListItem',
  props: ['job'],
  computed: {
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

}
</script>