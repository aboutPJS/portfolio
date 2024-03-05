<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-xs-12 d-flex z-0">
        <aside class="w-100">
          <div :style="{ background: color }" class="d-flex flex-column">
            <div class="vertical-text mt-4">
              {{ title }}
            </div>
            <div class="m-4 p-2 mt-auto" :style="{ background: color }">
              <router-link
                :to="{ query: { id: index } }"
                :class="{ active: index == currentSection }"
                v-for="(section, index) in props.sections"
                :key="section"
              >
                {{ section.title.toUpperCase() }}
              </router-link>
            </div>
          </div>
        </aside>
      </div>
      <div class="col-lg-10 col-xs-12 z-1">
        <EntryGroup
          v-for="(section, index) in props.sections"
          :section="section"
          :id="index"
          :key="section"
        ></EntryGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import EntryGroup from "@/components/EntryGroup.vue";
import { Section } from "@/models/vita";

const props = defineProps<{
  title: string;
  sections: Array<Section>;
  color: string;
}>();
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
      rootMargin: "0px 0px -90% 0px",
    }
  );
  document.querySelectorAll("div.section-title").forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style>
aside > div {
  /*border: 2px solid blue;*/
  display: flex;
  width: 100%;
  height: 80vh;
  position: sticky;
  top: 100px;
}

aside > div > div > a {
  color: black;
  display: block;
  text-decoration: none;
  line-height: 1rem;
}

aside a.active {
  font-weight: bold;
  border-color: black;
  line-height: 4rem;
  font-size: calc(var(--bs-body-font-size) * 2);
}

.vertical-text {
  z-index: -1;
  position: absolute;
  writing-mode: vertical-rl;
  font-weight: bold;
  color: white;
  font-size: 15vh;
  line-height: 70%;
}
</style>
