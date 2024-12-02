import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import CheckoutModal from "../components/CheckoutModal";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Cart />
      <CheckoutModal />
      {/* <Home /> */}
      {/* <Products /> */}
      <Outlet />
    </div>
  );
}

export default App;
