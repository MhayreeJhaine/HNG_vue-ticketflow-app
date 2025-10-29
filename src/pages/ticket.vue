<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <main class="p-6 max-w-[1440px] mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Ticket Management</h1>

      <!-- FORM SECTION -->
      <form
        @submit.prevent="handleSubmit"
        class="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4 border"
      >
        <input
          v-model="title"
          type="text"
          placeholder="Ticket Title"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          v-model="description"
          placeholder="Ticket Description"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <select
          v-model="status"
          class="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {{ editingTicket ? "Update Ticket" : "Create Ticket" }}
        </button>
      </form>

      <!-- TICKET GRID SECTION -->
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
            :class="[
              'inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium',
              ticket.status === 'Closed'
                ? 'bg-green-100 text-green-700'
                : ticket.status === 'In Progress'
                ? 'bg-purple-100 text-purple-700'
                : 'bg-yellow-100 text-yellow-700',
            ]"
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
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, h } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const tickets = ref([]);
const title = ref("");
const description = ref("");
const status = ref("Open");
const editingTicket = ref(null);

onMounted(() => {
  const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
  tickets.value = storedTickets;
});

const saveTickets = (updatedTickets) => {
  tickets.value = updatedTickets;
  localStorage.setItem("tickets", JSON.stringify(updatedTickets));
};

const handleSubmit = () => {
  if (!title.value.trim() || !description.value.trim()) {
    toast.error("Please fill in all fields");
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
    toast.success("Ticket updated successfully!");
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
    toast.success("Ticket created!");
  }

  title.value = "";
  description.value = "";
  status.value = "Open";
};

const handleEdit = (ticket) => {
  editingTicket.value = ticket;
  title.value = ticket.title;
  description.value = ticket.description;
  status.value = ticket.status;
};

// custom toast popup
const handleDelete = (id) => {
  const toastId = toast.info(
    [
      h(
        "p",
        { class: "text-gray-800 font-medium text-center mb-3" },
        "Are you sure you want to delete this ticket?"
      ),
      h("div", { class: "flex space-x-3 justify-center" }, [
        h(
          "button",
          {
            class:
              "px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300",
            onClick: () => toast.dismiss(toastId),
          },
          "Cancel"
        ),
        h(
          "button",
          {
            class:
              "px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",
            onClick: () => {
              const filtered = tickets.value.filter((t) => t.id !== id);
              saveTickets(filtered);
              toast.dismiss(toastId);
              toast.success("Ticket deleted");
            },
          },
          "Delete"
        ),
      ]),
    ],
    {
      autoClose: false,
      closeOnClick: true,
      draggable: false,
      position: "top-center",
      closeButton: false,
      icon: false,
    }
  );
};
</script>
