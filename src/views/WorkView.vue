<template>
  <SectionGroup
    :sections="works"
    title="Work"
    color="var(--bs-yellow)"
  ></SectionGroup>
</template>

<script lang="ts" setup>
import SectionGroup from "@/components/SectionGroup.vue";
import { works } from "@/data/Work";
</script>
