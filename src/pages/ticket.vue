<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/header.vue";

// Ticket form state
const tickets = ref([]);
const title = ref("");
const description = ref("");
const status = ref("Open");
const editingTicket = ref(null);

// Load tickets from localStorage
onMounted(() => {
  const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
  tickets.value = storedTickets;
});

// Save tickets helper
const saveTickets = (updatedTickets) => {
  tickets.value = updatedTickets;
  localStorage.setItem("tickets", JSON.stringify(updatedTickets));
};

// Form submission
const handleSubmit = (e) => {
  e.preventDefault();

  if (!title.value.trim() || !description.value.trim()) {
    alert("Please fill in all fields");
    return;
  }

  if (editingTicket.value) {
    const updated = tickets.value.map((t) =>
      t.id === editingTicket.value.id
        ? {
            ...t,
            title: title.value,
            description: description.value,
            status: status.value,
          }
        : t
    );
    saveTickets(updated);
    alert("Ticket updated successfully!");
    editingTicket.value = null;
  } else {
    const newTicket = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      status: status.value,
      createdAt: new Date().toISOString(),
    };
    saveTickets([...tickets.value, newTicket]);
    alert("Ticket created!");
  }

  // Reset form
  title.value = "";
  description.value = "";
  status.value = "Open";
};

// Edit ticket
const handleEdit = (ticket) => {
  editingTicket.value = ticket;
  title.value = ticket.title;
  description.value = ticket.description;
  status.value = ticket.status;
};

// Delete ticket
const handleDelete = (id) => {
  if (confirm("Are you sure you want to delete this ticket?")) {
    const filtered = tickets.value.filter((t) => t.id !== id);
    saveTickets(filtered);
    alert("Ticket deleted");
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <main class="p-6 max-w-[1440px] mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Ticket Management</h1>

      <!-- Form Section -->
      <form
        @submit.prevent="handleSubmit"
        class="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4 border"
      >
        <input
          type="text"
          placeholder="Ticket Title"
          v-model="title"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Ticket Description"
          v-model="description"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <select
          v-model="status"
          class="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {{ editingTicket ? "Update Ticket" : "Create Ticket" }}
        </button>
      </form>

      <!-- Tickets Grid -->
      <div
        v-if="tickets.length > 0"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div
          v-for="ticket in tickets"
          :key="ticket.id"
          class="bg-white p-4 rounded-lg shadow border"
        >
          <h3 class="font-semibold text-lg text-gray-800">
            {{ ticket.title }}
          </h3>
          <p class="text-gray-600 mt-1">{{ ticket.description }}</p>

          <span
            class="inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium"
            :class="{
              'bg-green-100 text-green-700': ticket.status === 'Resolved',
              'bg-purple-100 text-purple-700': ticket.status === 'In Progress',
              'bg-yellow-100 text-yellow-700': ticket.status === 'Open',
            }"
          >
            {{ ticket.status }}
          </span>

          <div class="mt-3 space-x-3">
            <button
              @click="handleEdit(ticket)"
              class="text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              @click="handleDelete(ticket.id)"
              class="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <p v-else class="text-gray-500 text-center mt-6">
        No tickets yet — create your first one!
      </p>
    </main>
  </div>
</template>
