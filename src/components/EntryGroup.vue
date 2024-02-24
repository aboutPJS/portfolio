<template>
  <h3>{{ props.section.title }}</h3>
  <div v-for="entry in props.section.entries">
    <EntryCard :entry="entry"></EntryCard>
  </div>
</template>

<script setup lang="ts">
import { Section } from "@/models/vita";
import EntryCard from "@/components/EntryCard.vue";

const props = defineProps<{
  section: Section;
}>();
</script>
