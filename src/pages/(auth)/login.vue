<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Router instance
const router = useRouter();

// Form fields
const email = ref("");
const password = ref("");
const showPassword = ref(false);

// Error handling
const error = ref("");

// Methods
const handleLogin = () => {
  error.value = "";
  const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
  const foundUser = users.find(
    (user) => user.email === email.value && user.password === password.value
  );

  if (!foundUser) {
    error.value = "Invalid email or password.";
    toast.error("Invalid credentials");
    return;
  }

  localStorage.setItem("ticketapp_session", email.value);
  toast.success("Login successful! Redirecting to dashboard...");
  setTimeout(() => router.push("/dashboard"), 2000);
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50 px-6">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>

      <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <input
          type="email"
          placeholder="Email"
          class="w-full border rounded p-2"
          v-model="email"
          required
        />

        <!-- Password -->
        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Password"
            class="w-full border rounded p-2 pr-10"
            required
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-2.5 text-gray-600"
          >
            <component
              :is="showPassword ? EyeIcon : EyeSlashIcon"
              class="w-5 h-5"
            />
          </button>
        </div>

        <button
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p class="text-sm text-center mt-4">
        Don’t have an account?
        <router-link to="/signup" class="text-blue-600 font-semibold">
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>
