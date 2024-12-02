import { useLocation } from "react-router-dom";
import logoBlack from "../images/logo-black.png";
import logoWhite from "../images/logo-white.png";
import CartIcon from "./CartIcon";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  let location = useLocation();

  const route = location.pathname === "/" ? "home" : "products";

  const navClass = route === "home" ? "navbar" : "navbar page";

  return (
    <nav className={navClass}>
      <div className="nav-center">
        <NavBarLinks />
        <img
          src={route === "home" ? logoWhite : logoBlack}
          className="nav-logo"
          alt="logo"
        />
        <CartIcon />
      </div>
    </nav>
  );
}

export default NavBar;
