import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header class="main-head">
        <nav>
          <h1 id="logo">Tagpro Central</h1>
          <ul>
            <li>
              <a href="#MLTPs">MLTP</a>
            </li>
            <li>
              <a href="#NLTP">NLTP</a>
            </li>
            <li>
              <a href="#ELTP">ELTP</a>
            </li>
            <li>
              <a href="#OLTP">OLTP</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
