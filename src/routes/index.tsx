import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import ProductDetail from "@/pages/ProductDetail/ProductDetail";


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
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;