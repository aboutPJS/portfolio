<template>
  <div class="sticky-navbar">
    <NavBar />
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>
<style>
.sticky-navbar {
  background: rgba(255, 255, 255, 255);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}
</style>
