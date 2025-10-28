<template>
  <button
    @click="handleLogout"
    class="bg-red-500 text-white px-5 py-2 my-8 rounded hover:bg-red-600 cursor-pointer"
  >
    Logout
  </button>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    handleLogout() {
      localStorage.removeItem("ticketapp_session");
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped>
/* optional scoped styles if needed */
</style>
