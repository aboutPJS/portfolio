<template>
  <div class="container" style="height: 90vh">
    <div class="row justify-content-center align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <img
              src="https://raw.githubusercontent.com/aboutPJS/assets/main/portfolio/shared/Profile.png"
              class="img-fluid"
              alt="Paul Jacob Schlenzig"
            />
          </div>
          <div class="col-md-6">
            <h1>Hello! 👋</h1>
            <p v-html="welcomeText"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { welcomeText } from "@/data/Welcome";
</script>

<style>
.link {
  color: blue; /* Default link color */
  text-decoration: underline; /* Default underline */
  font-style: italic;
  transition: color 0.3s; /* Smooth transition for color change */
}

.link:hover {
  color: darkblue; /* Change color on hover */
}
</style>
