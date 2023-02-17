import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/template.vue"),
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("../components/home.vue"),
        },
      ]
    },
  ],
});

export default router;
