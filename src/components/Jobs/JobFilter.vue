<template>
  <div class="jobs-filter">
    <div class=jobs-sortby>
      Sort by:
      <select>
        <option>Name</option>
        <option>Deadline</option>
      </select>
    </div>
    <div class="jobs-category">
      Show:
      <select
        @change="(e) => setCategory(e.target.value.toUpperCase())"
      >
        <option
          v-for="option in jobOptions"
          :selected="option.toUpperCase() === currentCategory"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div class="jobs-refresh">
      <button @click="refresh">Refresh <i class="bi bi-arrow-repeat"></i></button>
    </div>
    <div class="jobs-search">
      <form @submit="(e) => search(e, e.target.search.value)">
        <input @input="(e) => search(e, e.target.value)" type="text" name="search" placeholder="Search..." />
        <i class="bi bi-search"></i>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'JobFilter',
  props: ['jobOptions', 'currentCategory'],
  computed: {
    ...mapGetters(['jobCategory'])
  },
  methods: {
    ...mapActions(['fetchProjectsAndJobs']),
    setCategory(category) {
      this.$emit('setCategory', category);
    },
    selectedCategory(option, currentCategory) {
      option.toLowerCase() === currentCategory.toLowerCase() ? true : false;
    },
    search(e, value) {
      e.preventDefault();
      this.$emit('search', value);
    },
    refresh() {
      this.fetchProjectsAndJobs(this.jobCategory);
    }
  }
}
</script>