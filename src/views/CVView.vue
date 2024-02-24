<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <EntryGroup v-for="section in vita" :section="section"></EntryGroup>
      </div>
      <div class="col-4">
        <strong>Vita</strong>
        <p v-for="section in vita">{{ section.title }}</p>
      </div>
    </div>
  </div>

  <main>
    <article>
      <h1>My Vita</h1>
      <section class="m-5" v-for="(header, index) in headers" :key="header">
        <h2 :id="index">
          {{ header }}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </section>
    </article>
    <aside>
      <div>
        {{ currentSection }}
        <a
          :class="{ active: index == currentSection }"
          v-for="(header, index) in headers"
          :key="header"
          :href="`#${index}`"
        >
          {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { cv } from "@/data/CV";
import EntryGroup from "@/components/EntryGroup.vue";
import { Section } from "@/models/vita";



const vita = cv;

const headers = [
  "Education",
  "Professional Experience",
  "Soft Skills",
  "Hardskills Skills",
];

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
  document.querySelectorAll("article h2").forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style>
main {
  display: flex;
}

article {
  width: 75%;
  margin-bottom: 500px;
}

aside {
  width: 25%;
}

aside > div {
  position: sticky;
  top: 20px;
  padding-left: 2em;
}

aside > div > a {
  display: block;
  color: red;
  text-decoration: none;
  border-left: 1px solid #ccc;
  padding-left: 2em;
}

aside a.active {
  font-weight: bold;
  border-color: black;
}
</style>
