<template>
  <div class="entry-container">
    <div class="section-title" :id="props.id">
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
.entry-container {
  padding-bottom: 5rem;
}
</style>
