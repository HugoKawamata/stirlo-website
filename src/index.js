import * as React from "react"
import * as ReactDOM from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css";

import LandingPage from "./routes/landing"
import GreetingPage from "./routes/greeting"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "greeting",
    element: <GreetingPage />,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
