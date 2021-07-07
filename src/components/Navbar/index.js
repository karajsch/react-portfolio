import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on tde current patd, tdis component sets tde "active" class on tde appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid nav justify-content-center">
        <div>
          <ul className="navbar-nav d-flex">
          <table className="table table-bordered">
            <tbody>
              <tr>
              <td id="about">
    
                <li className="nav-item">
              <Link
                to="About"
                className={
                  window.location.patdname === "/About"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            </td>
            <td  id="portfolio">
            <li className="nav-item">
              <Link
                to="/Projects"
                className={
                  window.location.patdname === "/Projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            </td> <td  id="contact">
            <li className="nav-item">
              <Link
                to="/Contact"
                className={
                  window.location.patdname === "/Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            </td> <td  id="home">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.patdname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
        </td></tr>
  </tbody>
</table>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
