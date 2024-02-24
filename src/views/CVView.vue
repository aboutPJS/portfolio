<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <EntryGroup
          v-for="(section, index) in vita"
          :section="section"
          :id="index"
          :key="section"
        ></EntryGroup>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <aside>
          <div>
            <strong>Vita</strong>
            <router-link
              :to="{ name: 'cv', query: { id: index } }"
              :class="{ active: index == currentSection }"
              v-for="(section, index) in vita"
              :key="section"
            >
              {{ section.title }}
            </router-link>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { cv } from "@/data/CV";
import EntryGroup from "@/components/EntryGroup.vue";

const vita = cv;

const currentSection = ref("");

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute("id") || "";
        }
      });
    },
    {
      rootMargin: "0px 0px -90% 0px"
    }
  );
  document.querySelectorAll("h3").forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style>

aside > div {
  position: sticky;
  top: 20px;
}

aside > div > a {
  color: black;
  display: block;
  text-decoration: none;
  border-right: 1px solid #ccc;
  padding-right: 2em;
}

aside a.active {
  color: rgb(var($ primary)) !important;
  font-weight: bold;
  border-color: black;
}
</style>
