<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <strong>PAUL JACOB SCHLENZIG</strong>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse ms-auto"
        style="justify-content: end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link to="/cv" class="nav-link">Vita</router-link>
          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/work" class="nav-link">Work</router-link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownSocial"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Connect
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownSocial">
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.linkedin.com/in/paul-jacob-schlenzig-bb11791b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon></LinkedinIcon> LinkedIn
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://github.com/aboutPJS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon></GithubIcon> GitHub
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="mailto:paul.schlenzig@me.com">
                  <MailIcon></MailIcon> Email
                </a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LinkedinIcon from "vue-material-design-icons/Linkedin";
import GithubIcon from "vue-material-design-icons/Github.vue";
import MailIcon from "vue-material-design-icons/Email.vue";
</script>
