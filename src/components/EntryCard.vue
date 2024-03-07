<template>
  <div class="accordion" :id="'accordion-' + index">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse-' + index"
          aria-expanded="true"
          :aria-controls="'collapse-' + index"
        >
          <div class="row w-100">
            <div class="col-md-2">
              {{ props.entry.startDate }}
              {{ props.entry.endDate ? " - " + props.entry.endDate : "" }}
            </div>
            <div class="col-md-5">{{ props.entry.title }}</div>
            <div class="col-md-5">{{ props.entry.company }}</div>
          </div>
        </button>
      </h2>
      <div
        :id="'collapse-' + index"
        class="accordion-collapse collapse"
        :data-bs-parent="'#accordion-' + index"
      >
        <div class="accordion-body">
          <hr class="m-0" style="opacity: 100%" />
          <div class="row pb-3">
            <div class="col-md">
              <div class="row">
                <div
                  :class="{
                    'col-md-2': !entry.pictures,
                    'col-md-3': entry.pictures,
                  }"
                >
                  Description
                </div>
                <div
                  class="col-md"
                  style="text-align: justify"
                  v-html="props.entry.description"
                ></div>
              </div>
              <div v-if="entry.skills" class="row mt-3">
                <div
                  :class="{
                    'col-md-2': !entry.pictures,
                    'col-md-3': entry.pictures,
                  }"
                >
                  Skills
                </div>
                <div class="col-md">
                  <div class="row">
                    <div class="col-md-4" v-for="skills in props.entry.skills">
                      <li>
                        {{ skills }}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="entry.links" class="row mt-3">
                <div
                  :class="{
                    'col-md-2': !entry.pictures,
                    'col-md-3': entry.pictures,
                  }"
                >
                  Resources
                </div>
                <div class="col-md">
                  <div class="row">
                    <div class="col-md-4" v-for="link in props.entry.links">
                      <a :href="link.url">
                        {{ link.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4" v-if="props.entry.pictures">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div
                    v-for="(imagePath, index) in props.entry.pictures"
                    :key="index"
                    :class="{ 'carousel-item': true, active: index === 0 }"
                  >
                    <img
                      :src="
                        imagePath.startsWith(`http`)
                          ? imagePath
                          : require(`@/assets/${imagePath}`)
                      "
                      class="d-block w-100"
                      :alt="'Slide ' + (index + 1)"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Entry } from "@/models/vita";

const props = defineProps<{
  entry: Entry;
  index: string;
}>();
</script>

<style></style>
