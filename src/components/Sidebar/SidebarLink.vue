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
