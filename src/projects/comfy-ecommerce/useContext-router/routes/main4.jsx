import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import About from "../components/About.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Home from "../components/Home.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import Products from "../components/Products.jsx";
import GlobalContextProvider from "../context/GlobalContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        children: [
          { index: true, element: <Products /> },
          { path: "single/:id", element: <ProductDetails /> },
        ],
      },
      { path: "about", element: <About /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
