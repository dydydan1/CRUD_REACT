# Tasksy — Full-Stack Task Management Application

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive, and minimalist task management web application built with **React 19**, **Tailwind CSS v4**, and **TanStack Query**. Tasksy enables users to create, track, organize, and manage daily tasks with real-time feedback, user authentication, and a clean, accessible interface.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running the App](#running-the-app)
- [Available Scripts](#-available-scripts)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Author & License](#-author--license)

---

## 🌟 Overview

**Tasksy** is designed to simplify personal and team productivity. It offers full CRUD (Create, Read, Update, Delete) task workflows, an intuitive task counter dashboard, dynamic filtering and sorting, and an interactive FAQ assistant. It communicates with a secure Node.js/Express REST API backed by MongoDB.

---

## ✨ Key Features

- **🔐 User Authentication & Authorization**:
  - Secure User Signup and Login flows.
  - JWT tokens stored securely via cookies (`js-cookie`).
  - Protected client-side routes (`PrivateRoutes`) safeguarding private user task spaces.

- **📝 Complete Task CRUD Operations**:
  - **Create**: Create tasks with title, rich description, priority level, due date, and initial status.
  - **Read**: Fetch paginated tasks tied to the authenticated user with loading skeleton states.
  - **Update**: Edit task details or toggle statuses between `Todo`, `In Progress`, and `Completed`.
  - **Delete**: Remove tasks with user confirmation and instant toast alerts.

- **📊 Live Task Metrics & Dashboard**:
  - Real-time counters showing total tasks by status (`To Do`, `In Progress`, `Completed`).
  - Instant UI updates with optimistic local state handling and TanStack Query cache synchronization.

- **🔍 Advanced Search, Filtering & Sorting**:
  - Live search across task titles and descriptions.
  - Filter tasks by status (`all`, `todo`, `in-progress`, `completed`) and priority (`low`, `medium`, `high`).
  - Query parameter-driven pagination and sorting (`asc` / `desc`).

- **🛡️ Schema Validation & Forms**:
  - Built with **React Hook Form** and **Zod** schema validation for immediate, type-safe client-side feedback.

- **🌓 Dark / Light Theme Support**:
  - Built-in theme switcher (`ThemeToggle`) with persistent theme state.

- **🤖 Interactive FAQ Chatbot**:
  - Accessible expandable chatbot widget answering frequently asked questions on app usage and data security.

- **🎨 Modern Design & Components**:
  - Styled with **Tailwind CSS v4** and Geist variable font.
  - Accessible UI primitives and customizable components inspired by shadcn/Radix.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Server State Management**: [TanStack React Query v5](https://tanstack.com/query/latest) & Devtools
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Date Handling & Picker**: [date-fns](https://date-fns.org/) & [react-day-picker](https://react-day-picker.js.org/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) / Custom Toasts
- **Typography**: `@fontsource-variable/geist`

### Backend (REST API)
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB
- **Hosted API**: `https://tasksy-api.vercel.app`

---

## 📂 Project Architecture

```text
crud-react/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/             # Images and graphic assets
│   ├── components/         # Reusable UI & feature components
│   │   ├── createTaskForm/ # Task creation form modal/drawer
│   │   ├── editTaskForm/   # Task edit form
│   │   ├── faqChatbot/     # Interactive FAQ bot widget
│   │   ├── filterBar/      # Search, status & priority filter controls
│   │   ├── logout/         # Logout handler button
│   │   ├── orderSelect/    # Order / sort selector
│   │   ├── privateRoutes/  # Route guard for authenticated views
│   │   ├── task/           # Task card item display
│   │   ├── taskSidebar/    # Collapsible sidebar for creating tasks
│   │   ├── tasksCounter/   # Status count metric badges
│   │   ├── themeToggle/    # Dark/light theme toggle button
│   │   └── ui/             # Reusable primitive UI components (Button, Input, Card, etc.)
│   ├── context/            # React context providers (TasksContext, ThemeContext)
│   ├── hooks/              # Custom TanStack Query hooks (useFetchTask, useCreateTasks, etc.)
│   ├── lib/                # Shared utility functions (cn, class mergers)
│   ├── pages/              # Application views
│   │   ├── 404/            # Not found page
│   │   ├── login/          # User login page
│   │   ├── singup/         # User registration page
│   │   └── tasks/          # Main task board dashboard
│   ├── schema/             # Zod validation schemas (login, signup, createTask)
│   ├── App.jsx             # Landing / Hero page
│   ├── index.css           # Global Tailwind CSS definitions
│   └── main.jsx            # React root mount and router configuration
├── .env.example            # Sample environment variables
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite configuration
└── vercel.json             # Single-page app routing rewrites for Vercel
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm**, **pnpm**, or **yarn**
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dydydan1/CRUD_REACT.git
   cd CRUD_REACT/crud-react
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Environment Configuration

Create a `.env` file in the `crud-react` directory by copying `.env.example`:

```bash
cp .env.example .env
```

Define the API endpoint:

```env
VITE_API_URL=https://tasksy-api.vercel.app
```

> **Note:** If running your own backend server locally, set:
> ```env
> VITE_API_URL=http://localhost:5000
> ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist` folder. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🌐 API Integration

The frontend connects to a RESTful API with the following standard endpoints:

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/signup` | Register a new user account | No |
| `POST` | `/auth/login` | Authenticate user & return JWT token | No |
| `GET` | `/tasks` | Fetch paginated & sorted tasks for user | Yes (Bearer Token) |
| `POST` | `/tasks` | Create a new task | Yes (Bearer Token) |
| `PATCH` | `/tasks/:id` | Update task details or status | Yes (Bearer Token) |
| `DELETE` | `/tasks/:id` | Delete a task by ID | Yes (Bearer Token) |

---

## ☁️ Deployment

This project is ready to be deployed on platforms like **Vercel**, **Netlify**, or **Cloudflare Pages**.

A [`vercel.json`](vercel.json) file is included to configure SPA rewrite rules so client-side routes (e.g. `/tasks`, `/login`) work without 404 errors on page reload:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 👤 Author & License

- **Developer**: Dy Ann Razonado
- **License**: Released under the [MIT License](LICENSE).
