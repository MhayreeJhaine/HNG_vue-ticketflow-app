import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/homepage.vue";
import Login from "../pages/(auth)/login.vue";
import Signup from "../pages/(auth)/signup.vue";
import Dashboard from "../pages/dashboard.vue";
import Ticket from "../pages/ticket.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/tickets", name: "Ticket", component: Ticket },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
