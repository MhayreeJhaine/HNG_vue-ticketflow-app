<template>
  <div
    class="min-h-screen flex flex-col justify-between bg-linear-to-b from-blue-50 to-white"
  >
    <main class="flex-1">
      <!-- Header -->
      <header
        class="bg-white shadow-md p-4 flex justify-between items-center relative z-50"
      >
        <h1
          class="text-2xl font-bold text-blue-600 cursor-pointer"
          @click="goHome"
        >
          🎟️ Ticket Manager
        </h1>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-4">
          <a
            v-if="isAuthenticated"
            href="/dashboard"
            :class="[
              'px-3 py-2 rounded',
              page === 'dashboard'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:text-blue-600',
            ]"
          >
            Dashboard
          </a>

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

        <!-- Mobile Menu Icon -->
        <button
          @click="toggleMenu"
          class="md:hidden text-2xl text-gray-700 hover:text-blue-600 focus:outline-none z-50"
        >
          <component :is="menuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
        </button>

        <!-- Mobile Dropdown Menu -->
        <transition name="fade">
          <div
            v-if="menuOpen"
            class="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start p-4 space-y-2 md:hidden z-40 border-t border-gray-100"
          >
            <a
              v-if="isAuthenticated"
              href="/dashboard"
              :class="[
                'w-full text-left px-3 py-2 rounded',
                page === 'dashboard'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:text-blue-600',
              ]"
              @click="menuOpen = false"
            >
              Dashboard
            </a>

            <a
              href="/login"
              :class="[
                'w-full text-left px-3 py-2 rounded',
                page === 'login'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:text-blue-600',
              ]"
              @click="menuOpen = false"
            >
              Login
            </a>

            <a
              href="/signup"
              :class="[
                'w-full text-left px-3 py-2 rounded',
                page === 'signup'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:text-blue-600',
              ]"
              @click="menuOpen = false"
            >
              Get Started
            </a>
          </div>
        </transition>
      </header>

      <!-- Hero Section -->
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

<script setup>
import { ref, onMounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";

const page = ref("homepage");
const isAuthenticated = ref(false);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const goHome = () => {
  window.location.href = "/";
};

onMounted(() => {
  const session = localStorage.getItem("ticketapp_session");
  isAuthenticated.value = !!session;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
