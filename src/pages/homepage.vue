<script setup>
import Footer from "../components/footer.vue";
import Hero from "../components/hero.vue";
// import Footer from "../components/footer.vue";
import { ref } from "vue";

const page = ref("dashboard"); // for active link
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-between bg-linear-to-b from-blue-50 to-white"
  >
    <main class="flex-1">
      <header class="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">🎟️ Ticket Manager</h1>
        <nav class="space-x-4">
          <a
            href="/login"
            :class="[
              'px-3 py-2 rounded',
              page === 'login'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:text-blue-600',
            ]"
          >
            Login
          </a>
          <a
            href="/signup"
            :class="[
              'px-3 py-2 rounded',
              page === 'signup'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:text-blue-600',
            ]"
          >
            Get Started
          </a>
        </nav>
      </header>

      <Hero />

      <!-- Features Section -->
      <section class="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div class="bg-white shadow-md rounded-xl p-6">
          <h3 class="text-lg font-semibold mb-2 text-blue-600">
            Manage Tickets
          </h3>
          <p class="text-gray-600">
            Easily create, track, and resolve tickets.
          </p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6">
          <h3 class="text-lg font-semibold mb-2 text-blue-600">
            Stay Organized
          </h3>
          <p class="text-gray-600">
            View all open and closed tickets in one place.
          </p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6">
          <h3 class="text-lg font-semibold mb-2 text-blue-600">Collaborate</h3>
          <p class="text-gray-600">
            Work with your team efficiently and effectively.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
