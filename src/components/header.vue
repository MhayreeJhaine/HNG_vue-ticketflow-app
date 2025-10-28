<template>
  <header class="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold text-blue-600">🎟️ Ticket Manager</h1>

    <nav class="space-x-4">
      <RouterLink to="/" :class="linkClass('/homepage')"> Homepage </RouterLink>
      <RouterLink to="/dashboard" :class="linkClass('/dashboard')">
        Dashboard
      </RouterLink>
      <RouterLink to="/tickets" :class="linkClass('/tickets')">
        Tickets
      </RouterLink>
    </nav>
  </header>
</template>

<script>
import { useRoute, RouterLink } from "vue-router";

export default {
  name: "Header",
  components: { RouterLink },
  setup() {
    const route = useRoute();

    const linkClass = (path) => {
      return `px-3 py-2 rounded ${
        route.path === path
          ? "bg-blue-500 text-white"
          : "text-gray-700 hover:text-blue-600"
      }`;
    };

    return { linkClass };
  },
};
</script>

<style scoped>
/* optional styles if needed */
</style>
