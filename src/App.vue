<template>
  <NavBar />
  <div class="content">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<style>
.content {
  padding-left: 5rem;
  padding-right: 5rem;
  /*padding: var(--bs-navbar-padding-x);*/
}
</style>
