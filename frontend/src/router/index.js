
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "layout",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        redirect: "/home",
        children: [
          {
            path: "home",
            name: "home",
            component: () => import("@/views/Home.vue"),
          },
          {
            path: 'order',
            name: "order",
            component: () => import("@/views/Order.vue")
          },
          {
            path: 'management',
            name: "management",
            component: () => import("@/views/Management.vue")
          },
          {
            path: 'goods',
            name: "goods",
            component: () => import("@/views/Goods.vue")
          },
          {
            path: 'detail/:id',
            name: "detail",
            component: () => import("@/views/Detail.vue")
          }
        ],
      },
    ],
  },
  {
    path: "/login",
    name: 'login',
    component: () => import("@/views/Login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
