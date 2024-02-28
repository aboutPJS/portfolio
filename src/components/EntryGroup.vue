<template>
  <div class="entry-container">
    <div class="title" :id="props.id">
      {{ props.section.title.toUpperCase() }}
    </div>
    <div v-for="(entry, index) in props.section.entries">
      <EntryCard :entry="entry" :index="index + '-' + props.id"></EntryCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Section } from "@/models/vita";
import EntryCard from "@/components/EntryCard.vue";

const props = defineProps<{
  section: Section;
  id: number;
}>();
</script>

<style>
.title {
  font-weight: bold;
  font-size: calc(var(--bs-body-font-size) * 6);
  text-align: right;
  padding-bottom: 2rem;
  padding-top: 1rem;
}

.entry-container {
  padding-bottom: 5rem;
}
</style>
