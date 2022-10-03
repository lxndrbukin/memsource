<template>
  <div class="jobs-filter">
    <select
      class="jobs-category"
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
    <div class="jobs-search">
      <form @submit="(e) => search(e, e.target.search.value)">
        <input @input="(e) => search(e, e.target.value)" type="text" name="search" placeholder="Search for a specific Job..." />
        <i class="bi bi-search"></i>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobFilter',
  props: ['jobOptions', 'currentCategory'],
  methods: {
    setCategory(category) {
      this.$emit('setCategory', category);
    },
    selectedCategory(option, currentCategory) {
      option.toLowerCase() === currentCategory.toLowerCase() ? true : false;
    },
    search(e, value) {
      e.preventDefault();
      this.$emit('search', value);
    }
  }
}
</script>