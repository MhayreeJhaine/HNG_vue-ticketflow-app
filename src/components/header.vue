<template>
  <header
    class="bg-white shadow-md p-4 flex justify-between items-center relative"
  >
    <!-- Logo -->
    <h1
      class="text-2xl font-bold text-blue-600 cursor-pointer"
      @click="navigateTo('/dashboard')"
    >
      🎟️ Ticket Manager
    </h1>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex space-x-4">
      <button
        @click="navigateTo('/')"
        :class="[
          'px-3 py-2 rounded',
          route.path === '/'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 hover:text-blue-600',
        ]"
      >
        Homepage
      </button>

      <button
        @click="navigateTo('/dashboard')"
        :class="[
          'px-3 py-2 rounded',
          route.path === '/dashboard'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 hover:text-blue-600',
        ]"
      >
        Dashboard
      </button>

      <button
        @click="navigateTo('/tickets')"
        :class="[
          'px-3 py-2 rounded',
          route.path === '/tickets'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 hover:text-blue-600',
        ]"
      >
        Tickets
      </button>
    </nav>

    <!-- Mobile Menu Icon -->
    <button
      @click="toggleMenu"
      class="md:hidden text-2xl text-gray-700 hover:text-blue-600 focus:outline-none"
    >
      <component :is="menuOpen ? XMarkIcon : Bars3Icon" class="h-6 w-6" />
    </button>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="menuOpen"
      class="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-2 md:hidden z-10"
    >
      <button
        @click="navigateAndClose('/')"
        :class="[
          'w-full text-left px-3 py-2 rounded',
          route.path === '/'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 hover:text-blue-600',
        ]"
      >
        Homepage
      </button>

      <button
        @click="navigateAndClose('/dashboard')"
        :class="[
          'w-full text-left px-3 py-2 rounded',
          route.path === '/dashboard'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 hover:text-blue-600',
        ]"
      >
        Dashboard
      </button>

      <button
        @click="navigateAndClose('/tickets')"
        :class="[
          'w-full text-left px-3 py-2 rounded',
          route.path === '/tickets'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700 hover:text-blue-600',
        ]"
      >
        Tickets
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const router = useRouter();
const route = useRoute();

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const navigateTo = (path) => {
  router.push(path);
};

const navigateAndClose = (path) => {
  router.push(path);
  menuOpen.value = false;
};
</script>
