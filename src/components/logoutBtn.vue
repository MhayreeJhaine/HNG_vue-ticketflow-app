<template>
  <button
    @click="handleLogout"
    class="text-red-500 border-2 border-red-500 px-5 py-1 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transition duration-400 ease-in-out"
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
      window.location.href = "/";
    },
  },
};
</script>

<style scoped>
/* optional scoped styles if needed */
</style>
