<template>
  <SectionGroup :sections="vita" title="Vita"></SectionGroup>
</template>

<script lang="ts" setup>
import { cv } from "@/data/CV";
import SectionGroup from "@/components/SectionGroup.vue";
const vita = cv;
</script>
