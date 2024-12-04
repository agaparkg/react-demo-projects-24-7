import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="api/v1">Api V1</Link>
        </li>
        <li>
          <Link to="api/v1/products">Api V1 Products</Link>
        </li>
        <li>
          <Link to="api/v1/news">Api V1 News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
