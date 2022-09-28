<template>
  <tr class="table-row">
    <td>{{ project.name }}</td>
    <td>{{ date }}</td>
    <td></td>
    <td></td>
    <td>{{ `${project.owner.firstName} ${project.owner.lastName}` }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: ['project'],
  computed: {
    date() {
      const jsonDate = new Date(this.project.dateCreated);
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
