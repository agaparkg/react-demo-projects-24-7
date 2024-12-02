import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App.jsx";
import About from "../components/About.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Home from "../components/Home.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import Products from "../components/Products.jsx";
import GlobalContextProvider from "../context/GlobalContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path="single/:id" element={<ProductDetails />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
