import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServiceView from "@/views/ServiceView.vue";
import WorkView from "@/views/WorkView.vue";
import CVView from "@/views/CVView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/services",
    name: "services",
    component: ServiceView
  },
  {
    path: "/work",
    name: "work",
    component: WorkView
  },
  {
    path: "/cv",
    name: "cv",
    component: CVView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.query && to.query.id) {
      return {
        el: document.getElementById(to.query.id.toString()),
        top: 10,
      };
    }
  }
});

export default router;
