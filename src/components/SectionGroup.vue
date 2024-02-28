<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 col-xs-12 d-flex justify-content-start">
        <aside>
          <span class="section-title">{{ props.title.toUpperCase() }}</span>
          <div>
            <router-link
              :to="{ query: { id: index } }"
              :class="{ active: index == currentSection }"
              v-for="(section, index) in props.sections"
              :key="section"
            >
              {{ section.title.toUpperCase() }}
            </router-link>
          </div>
        </aside>
      </div>

      <div class="col-md-10 col-xs-12">
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
  document.querySelectorAll("div.title").forEach((section) => {
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
  line-height: 1rem;
}

aside a.active {
  font-weight: bold;
  border-color: black;
  line-height: 4rem;
  font-size: calc(var(--bs-body-font-size) * 2);
}

.section-title {
  font-style: italic;
  color: var(--bs-primary);
}
</style>
