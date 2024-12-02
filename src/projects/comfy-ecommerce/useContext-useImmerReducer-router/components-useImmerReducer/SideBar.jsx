import { Link } from "react-router-dom";
import { useMyCustomContextApi } from "../hooks/custom";

function SideBar() {
  const { state, dispatch } = useMyCustomContextApi();

  const showNavbarClass = state.showNavBar
    ? "sidebar-overlay show"
    : "sidebar-overlay";

  return (
    <div className={showNavbarClass}>
      <aside className="sidebar">
        {/* close */}
        <button
          onClick={() => dispatch({ type: "setShowNavBar" })}
          className="sidebar-close"
        >
          <i className="fa fa-times"></i>
        </button>
        {/* links */}
        <ul className="sidebar-links">
          <li>
            <Link
              to="/"
              onClick={() => dispatch({ type: "setShowNavBar" })}
              className="sidebar-link"
            >
              <i className="fa fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => dispatch({ type: "setShowNavBar" })}
              className="sidebar-link"
            >
              <i className="fa fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={() => dispatch({ type: "setShowNavBar" })}
              className="sidebar-link"
            >
              <i className="fa fa-book fa-fw"></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
