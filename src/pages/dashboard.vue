<template>
  <div class="min-h-screen bg-gray-50">
    <Header :activePage="'dashboard'" />
    <main class="p-6 max-w-[1440px] mx-auto">
      <section class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      </section>

      <!-- Stats -->
      <section
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        <div class="bg-blue-100 text-blue-800 p-6 rounded-xl shadow">
          <h2 class="text-lg font-semibold">Total Tickets</h2>
          <p class="text-3xl font-bold">{{ totalTickets }}</p>
        </div>
        <div class="bg-yellow-100 text-yellow-800 p-6 rounded-xl shadow">
          <h2 class="text-lg font-semibold">Open Tickets</h2>
          <p class="text-3xl font-bold">{{ openTickets }}</p>
        </div>
        <div class="bg-purple-100 text-purple-800 p-6 rounded-xl shadow">
          <h2 class="text-lg font-semibold">In Progress</h2>
          <p class="text-3xl font-bold">{{ inProgressTickets }}</p>
        </div>
        <div class="bg-green-100 text-green-800 p-6 rounded-xl shadow">
          <h2 class="text-lg font-semibold">Resolved</h2>
          <p class="text-3xl font-bold">{{ resolvedTickets }}</p>
        </div>
      </section>

      <!-- Recent Tickets -->
      <section class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Recent Tickets</h3>
        <ul v-if="recentTickets.length" class="space-y-3">
          <li
            v-for="ticket in recentTickets"
            :key="ticket.id"
            class="p-4 bg-white rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 class="font-semibold text-gray-800">{{ ticket.title }}</h3>
              <p class="text-sm text-gray-600">{{ ticket.description }}</p>
            </div>
            <span
              :class="[
                'px-3 py-1 rounded-full text-sm font-medium',
                ticket.status === 'Open'
                  ? 'bg-yellow-100 text-yellow-800'
                  : ticket.status === 'In Progress'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-green-100 text-green-800',
              ]"
            >
              {{ ticket.status }}
            </span>
          </li>
        </ul>
        <p v-else class="text-gray-500">No recent tickets yet.</p>
      </section>

      <LogoutBtn />
    </main>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import LogoutBtn from "../components/logoutBtn.vue";

export default {
  components: { Header, LogoutBtn },
  data() {
    return {
      tickets: [],
    };
  },
  computed: {
    totalTickets() {
      return this.tickets.length;
    },
    openTickets() {
      return this.tickets.filter((t) => t.status === "Open").length;
    },
    inProgressTickets() {
      return this.tickets.filter((t) => t.status === "In Progress").length;
    },
    resolvedTickets() {
      return this.tickets.filter((t) => t.status === "Resolved").length;
    },
    recentTickets() {
      return [...this.tickets].reverse().slice(0, 5);
    },
  },
  mounted() {
    this.tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  },
};
</script>
