<template>
  <h3>{{ entry.title }}</h3>
  <p>{{ entry.description }}</p>
</template>

<script setup lang="ts">
import { Entry } from "@/models/vita";

const props = defineProps<{
  entry: Entry;
}>();

console.log(props.entry);
</script>
