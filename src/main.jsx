import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        hydrateFallbackElement: <h1>Loading...</h1>,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee",
        Component: UpdateCoffee,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
