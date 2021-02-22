import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Kara Schmidt
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="About"
                className={
                  window.location.pathname === "/About"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Projects"
                className={
                  window.location.pathname === "/Projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={
                  window.location.pathname === "/Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
