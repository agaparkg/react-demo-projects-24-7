import { useRoutes } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import CheckoutModal from "../components/CheckoutModal";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import SideBar from "../components/SideBar";
import "./App.css";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "products", element: <Products /> },
    { path: "products/single/:id", element: <ProductDetails /> },
    { path: "about", element: <About /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Cart />
      <CheckoutModal />
      {/* <Home /> */}
      {/* <Products /> */}
      {element}
    </div>
  );
}

export default App;
