import "../assets/navbar1.css"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0d47a1" }}>
      <div className="container">
        {/* Left side: University Name */}
        <a className="navbar-brand text-white fw-bold" href="#">
          College Management System
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#fff" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
            }}
          ></span>
        </button>

        {/* Right side: Dropdown */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-bold"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Create-Admin
                  </a>
                </li>
             
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
