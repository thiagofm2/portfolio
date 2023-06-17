import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/teste",
      name: "teste",
      component: () => import("../views/teste.vue"),
    },
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
        {
          path: "/sobre",
          name: "Sobre",
          component: () => import("../components/home.vue"),
        },
        {
          path: "/trabalhos",
          name: "Trabalhos",
          component: () => import("../components/home.vue"),
          children: [
            {
              path: "/marketplace",
              name: "Marketplace",
              component: () => import("../components/trabalhos.vue"),
            },
            {
              path: "/landingPage",
              name: "LandingPage",
              component: () => import("../components/trabalhos.vue"),
            },
            {
              path: "/siteInstitucional",
              name: "SiteInstitucional",
              component: () => import("../components/trabalhos.vue"),
            },
          ]
        },
        {
          path: "/contato",
          name: "Contato",
          component: () => import("../components/home.vue"),
        },
      
      ]
    },
  ],
});

export default router;
