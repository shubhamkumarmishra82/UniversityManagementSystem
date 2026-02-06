import { Link, NavLink } from "react-router-dom";
import "../assets/Navbar.css"
import DashboardHome from "./DashBoardHome";

export default function DashBoard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0d47a1" }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">
            CollegeManagement
          </a>
       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        
          >
            {/* White toggler bars */}
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
              }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Dropdown 1 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  New Information
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li><NavLink className="dropdown-item" to="/faculty">Faculty</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/student">Student</NavLink></li>
                </ul>
              </li>

              {/* Dropdown 2 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View Information
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li><NavLink className="dropdown-item" to="/facultyview">Faculty</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/studentview">Student</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Apply Leave
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="#">Faculty Leave</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/studentleave">Student Leave</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  View Leave
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="#">Faculty Leave</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/student/view/leave">Student Leave</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Fee
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Fees Structure</a></li>
                  <li><a className="dropdown-item" href="#">Student Fees Form</a></li>
                </ul>
              </li>
                   <li className="nav-item">
  <Link
    to="/logout"
    className="nav-link text-white fw-bold"
    style={{ cursor: "pointer" }}
  >
    Logout
  </Link>
</li>

            </ul>
          </div>
        </div>
      </nav>
      <DashboardHome/>
   
    </>
  );
}