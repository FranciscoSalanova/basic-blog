import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./styles.css"
import Posts from "./Components/Posts.jsx"
import Users from "./Components/Users.jsx"
import Todos from "./Components/Todos.jsx"

const router = createBrowserRouter([
  { path: "/", element: <Posts /> },
  { path: "/users", element: <Users /> },
  { path: "/todos", element: <Todos /> },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
