import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/Navbar.css";
import DashboardHome from "./DashBoardHome";
import AddFaculty from "./Faculty"; // Make sure you have this component
// import AddStudent from "./AddStudent"; // You can create this similarly

export default function DashBoard() {
  // State to control which component to show
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <>
      {/* ================= Navbar ================= */}
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
          >
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

              {/* ========== New Information ========== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  New Information
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("addFaculty")}
                    >
                      Faculty
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("addStudent")}
                    >
                      Student
                    </button>
                  </li>
                </ul>
              </li>

              {/* ========== View Information ========== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  View Information
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("viewFaculty")}
                    >
                      Faculty
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("viewStudent")}
                    >
                      Student
                    </button>
                  </li>
                </ul>
              </li>

              {/* ========== Update Information ========== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Update Information
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("updateFaculty")}
                    >
                      Faculty
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("updateStudent")}
                    >
                      Student
                    </button>
                  </li>
                </ul>
              </li>

              {/* ========== Apply Leave ========== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Apply Leave
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("applyFacultyLeave")}
                    >
                      Faculty Leave
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("applyStudentLeave")}
                    >
                      Student Leave
                    </button>
                  </li>
                </ul>
              </li>

              {/* ========== View Leave ========== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  View Leave
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("viewFacultyLeave")}
                    >
                      Faculty Leave
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("viewStudentLeave")}
                    >
                      Student Leave
                    </button>
                  </li>
                </ul>
              </li>

              {/* ========== Fee ========== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Fee
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("feesStructure")}
                    >
                      Fees Structure
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveComponent("studentFeesForm")}
                    >
                      Student Fees Form
                    </button>
                  </li>
                </ul>
              </li>

              {/* ========== Logout ========== */}
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

      {/* ================= Main Content ================= */}
      {activeComponent === "home" && <DashboardHome />}

      {activeComponent === "addFaculty" && (
        <AddFaculty goBack={() => setActiveComponent("home")} />
      )}

      {activeComponent === "addStudent" && (
        <div style={{ padding: "30px", textAlign: "center" }}>
          <h2>Add Student Form Goes Here</h2>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setActiveComponent("home")}
          >
            Back
          </button>
        </div>
      )}

      {activeComponent === "viewFaculty" && (
        <div style={{ padding: "30px", textAlign: "center" }}>
          <h2>View Faculty Information</h2>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setActiveComponent("home")}
          >
            Back
          </button>
        </div>
      )}

      {/* You can add all other states similarly like updateStudent, applyLeave, fees etc */}
    </>
  );
}
