<template>
  <footer class="bg-gray-900 text-gray-300 text-center py-6 mt-10">
    <p>&copy; {{ currentYear }} Ticket Manager. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
/* optional scoped styles if needed */
</style>
