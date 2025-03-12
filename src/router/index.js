import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/HomeView.vue";
import Pages from "../views/pages/pages.vue";
import Shop from "../views/shop/shopvue.vue";
import Detail from "../views/detail/detailvue.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/pages",
    name: "Pages",
    component: Pages,
  },
  {
    path: "/detail/:id", // ✅ Dynamic route with `id`
    name: "ProductDetail",
    component: Detail,
    props: true, // ✅ Enable props to automatically pass `id` as a prop
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
