# Vue Ticket Management App

A **Ticket Management System** built with **Vue 3**, **Tailwind CSS**, and **Vue Router**. This app allows users to create, edit, delete, and view tickets, with toast notifications powered by **vue3-toastify**.

---

## Features

- **User Authentication**

  - Login with email and password
  - Session persistence using `localStorage`

- **Ticket Management**

  - Create, edit, and delete tickets
  - Assign ticket status: Open, In Progress, Resolved
  - View ticket statistics (total, open, in-progress, resolved)
  - Display recent tickets

- **UI/UX**

  - Responsive layout using Tailwind CSS
  - Toast notifications for success and error messages
  - Password toggle (show/hide) with Heroicons

- **Storage**
  - All ticket and user data stored in browser `localStorage`

---

## Technologies Used

- [Vue 3](https://v3.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [vue3-toastify](https://github.com/ankurk91/vue3-toastify)
- [Heroicons](https://heroicons.com/)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/vue-ticket-app.git
   cd vue-ticket-app

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Run the development server**

   ```bash
   npm run dev

   ```

4. Open http://localhost:5173
   in your browser.
