<template>
  <SectionGroup
    :sections="services"
    title="Services"
    color="var(--bs-red)"
  ></SectionGroup>
</template>

<script lang="ts" setup>
import { services } from "@/data/Services";
import SectionGroup from "@/components/SectionGroup.vue";
</script>
