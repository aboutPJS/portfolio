<template>
  <h5>{{ entry.title }}</h5>
  <p>{{ entry.description }}</p>
</template>

<script setup lang="ts">
import { Entry } from "@/models/vita";

const props = defineProps<{
  entry: Entry;
}>();
</script>
