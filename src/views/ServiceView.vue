<template>
  <SectionGroup :sections="services" title="Services"></SectionGroup>
</template>

<script lang="ts" setup>
import { services as servicesData } from "@/data/Services";
import SectionGroup from "@/components/SectionGroup.vue";
const services = servicesData;
</script>