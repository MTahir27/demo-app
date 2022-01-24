import { useState, useEffect } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [currentLocation, setCurrentLocation] = useState("");
  const currentPage = useLocation().pathname;
  useEffect(() => {
    setCurrentLocation(currentPage);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand" href="#">
            React App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentLocation == "/" ? "active" : ""
                  } }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentLocation == "/About" ? "active" : ""
                  } }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentLocation == "/Services" && "active"
                  } }`}
                  to="/Services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentLocation == "/Contact" && "active"
                  } }`}
                  to="/Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
