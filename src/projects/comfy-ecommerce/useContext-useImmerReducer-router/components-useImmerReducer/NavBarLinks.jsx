import { Link } from "react-router-dom";
import { useMyCustomContextApi } from "../hooks/custom";

function NavBarLinks() {
  const { dispatch } = useMyCustomContextApi();

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "setShowNavBar" })}
        className="toggle-nav"
      >
        <i className="fa fa-bars"></i>
      </button>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            products
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBarLinks;
