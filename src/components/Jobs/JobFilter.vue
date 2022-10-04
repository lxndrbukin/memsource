<template>
  <div class="jobs-filter">
    <div class="jobs-sortby">
      Sort by:
      <select @change="setSortBy">
        <option
          v-for="option in sortByOptions"
          :selected="option === sortByOption"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div class="jobs-category">
      Show:
      <select @change="setCategory">
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
      <button @click="refresh">
        Refresh <i class="bi bi-arrow-repeat"></i>
      </button>
    </div>
    <div class="jobs-search">
      <form @submit="(e) => search(e, e.target.search.value)">
        <input
          @input="(e) => search(e, e.target.value)"
          type="text"
          name="search"
          placeholder="Search..."
        />
        <i class="bi bi-search"></i>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'JobFilter',
  props: ['currentCategory', 'sortByOption'],
  data() {
    return {
      jobOptions: ['All', 'New', 'Accepted', 'Completed'],
      sortByOptions: ['Name', 'Created'],
    };
  },
  computed: {
    ...mapGetters(['jobCategory']),
  },
  methods: {
    ...mapActions(['fetchProjectsAndJobs']),
    setCategory(e) {
      this.$emit('setCategory', e.target.value.toUpperCase());
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
    },
    setSortBy(e) {
      this.$emit('setSortBy', e.target.value);
    },
  },
};
</script>
