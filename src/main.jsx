import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Toaster, toast } from "@/components/ui/toast";
import App from "./App.jsx";
import Tasks from "./pages/tasks/tasks.jsx";
import Signup from "./pages/singup/signup.jsx";
import Login from "./pages/login/login.jsx";
import Error404 from "./pages/404/404.jsx";
import PrivateRoutes from "./components/privateRoutes/privateRoutes.jsx"
import { TasksContextProvider } from "./context/tasks.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    element: <PrivateRoutes />,
    children: [{
        path: "/tasks",
        element: <Tasks />,
    }],

  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TasksContextProvider>
      <RouterProvider router={router} />
      </TasksContextProvider>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);