import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;