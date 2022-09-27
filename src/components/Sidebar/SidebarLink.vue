<template>
  <router-link :to="link.path" class="sidebar_menu-btn">
    <i :class="link.icon"></i>
    <span>{{ link.name }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarLink',
  props: ['link'],
};
</script>

<style lan="scss">
.router-link-active {
  background-color: #484848;
  border-radius: 5px;
  color: #14b4fc !important;
}
</style>
