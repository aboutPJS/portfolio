import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/js/bootstrap";
import "./sass/main.scss";
createApp(App).use(router).mount("#app");
