import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Tasks from "./pages/tasks/tasks.jsx";
import Signup from './pages/singup/signup.jsx'
import Login from './pages/login/login.jsx'
import Error404 from './pages/404/404.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  
  {
    path: "/tasks",
    element: <Tasks />
  },

  {
    path: "/signup",
    element: <Signup />
  },

  {
    path: "*",
    element: <Error404 />
  }


]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
