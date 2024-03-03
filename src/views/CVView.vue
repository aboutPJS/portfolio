<template>
  <SectionGroup
    :sections="cv"
    title="Vita"
    color="var(--bs-blue)"
  ></SectionGroup>
</template>

<script lang="ts" setup>
import { cv } from "@/data/CV";
import SectionGroup from "@/components/SectionGroup.vue";
</script>
