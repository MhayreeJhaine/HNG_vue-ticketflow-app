<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToLogin = () => router.push("/login");
const goToSignup = () => router.push("/signup");
</script>

<template>
  <section
    class="relative overflow-hidden bg-linear-to-b from-blue-700 via-blue-600 to-blue-500 text-white py-24 md:py-32 flex flex-col items-center justify-center text-center px-6"
  >
    <!-- Animated Circles -->
    <div
      class="absolute top-10 left-16 w-40 h-40 bg-blue-300 rounded-full opacity-70 animate-float-slow shadow-[0_0_60px_10px_rgba(147,197,253,0.8)]"
    ></div>
    <div
      class="absolute bottom-16 right-20 w-56 h-56 bg-cyan-400 rounded-full opacity-80 animate-float-fast shadow-[0_0_80px_20px_rgba(6,182,212,0.6)]"
    ></div>

    <!-- Hero content -->
    <div class="relative z-10 max-w-2xl mx-auto">
      <h1
        class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md"
      >
        Simplify Ticket Management <br />
        <span class="text-yellow-300">Boost Team Efficiency</span>
      </h1>

      <p class="text-lg md:text-xl text-blue-50 mb-10">
        Stay organized, resolve faster, and keep your team in sync — all from
        one intuitive dashboard.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="goToLogin"
          class="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-transparent hover:border-2 hover:text-white hover:border-white hover:shadow-lg transition duration-200"
        >
          Login
        </button>
        <button
          @click="goToSignup"
          class="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition duration-200"
        >
          Get Started
        </button>
      </div>
    </div>

    <!-- Wavy divider SVG -->
    <svg
      class="absolute bottom-0 left-0 w-full z-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>
