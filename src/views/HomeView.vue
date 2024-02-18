<template>
  <div class="container" style="height: 90vh">
    <div class="row justify-content-center align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <img
              src="@/assets/Profile.png"
              class="img-fluid"
              alt="Paul Jacob Schlenzig"
            />
          </div>
          <div class="col-md-6">
            <h1>Hello! 👋</h1>
            <p>
              I'm Paul, a
              <mark>multi-disciplinary</mark>
              creator of
              <mark>user-centered digital services</mark>
              . With a background spanning service design, business, and
              full-stack development, I comprehensive support across
              <mark>every stage of digital product and service creation</mark>.
            </p>
            <p class="link">
              <router-link to="/services">
                Find out how we can work together.
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
