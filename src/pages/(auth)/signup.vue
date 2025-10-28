<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { toast } from "vue3-toastify";

// Router instance
const router = useRouter();

// Form fields
const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Toggles
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Error handling
const error = ref("");

// Methods
const handleSignup = (e) => {
  e.preventDefault();
  error.value = "";

  if (password.value.length < 8) {
    error.value = "Password must be at least 8 characters long.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match.";
    return;
  }

  // Retrieve existing users
  const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
  const userExists = users.some((user) => user.email === email.value);

  if (userExists) {
    error.value = "User already exists. Please login.";
    return;
  }

  // Add new user
  const newUser = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  };
  users.push(newUser);
  localStorage.setItem("ticketapp_users", JSON.stringify(users));

  toast.success("Signup successful! Redirecting to login...");
  setTimeout(() => router.push("/login"), 2000);
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50 px-6">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-600">Sign Up</h2>

      <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>

      <form @submit="handleSignup" class="space-y-4">
        <!-- Full Name -->
        <input
          v-model="fullName"
          type="text"
          placeholder="Full Name"
          class="w-full border rounded p-2"
          required
        />

        <!-- Email -->
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border rounded p-2"
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

        <!-- Confirm Password -->
        <div class="relative">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            class="w-full border rounded p-2 pr-10"
            required
          />
          <button
            type="button"
            @click="showConfirmPassword = !showConfirmPassword"
            class="absolute right-3 top-2.5 text-gray-600"
          >
            <!-- <component
              :is="showConfirmPassword ? AiOutlineEye : AiOutlineEyeInvisible"
            /> -->

            <component
              :is="showConfirmPassword ? EyeIcon : EyeSlashIcon"
              class="w-5 h-5"
            />
          </button>
        </div>

        <button
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>

      <p class="text-sm text-center mt-4">
        Already have an account?
        <router-link to="/login" class="text-blue-600 font-semibold"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>
