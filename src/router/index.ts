import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";
import WorkView from "@/views/WorkView.vue";
import CVView from "@/views/CVView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/services",
    name: "services",
    component: ServiceView,
  },
  {
    path: "/work",
    name: "work",
    component: WorkView,
  },
  {
    path: "/cv",
    name: "cv",
    component: CVView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
