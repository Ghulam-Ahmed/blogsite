import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                {props.Blog}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.Categories}
              </a>
              <ul
                className={`dropdown-menu ${
                  darkMode ? "dropdown-menu-dark" : ""
                }`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/ethical-hacking">
                    Ethical Hacking
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cyber-crime">
                    Cyber Crime
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/best-practices">
                    Best Practices to Avoid Cyber Crime
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* Dark Mode Toggle */}
          <button
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
