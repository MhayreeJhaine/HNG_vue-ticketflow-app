import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

app.use(router); // <-- This is mandatory
app.use(Vue3Toastify, {
  autoClose: 2000,
  position: "top-center",
});
app.mount("#app");
