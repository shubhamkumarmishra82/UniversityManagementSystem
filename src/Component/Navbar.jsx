export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <a className="navbar-brand text-light fw-bold" href="#">UniversityManagementSystem</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           New Information
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Faculty</a></li>
         <li><a className="dropdown-item" href="#">Student</a></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View Inforamtion
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Faculty</a></li>
         <li><a className="dropdown-item" href="#">Student</a></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Update Information
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Faculty</a></li>
         <li><a className="dropdown-item" href="#">Student</a></li>
          </ul>
        </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Apply Leave
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item " href="#">Faculty Leave</a></li>
         <li><a className="dropdown-item " href="#">Student Leave</a></li>
          </ul>
        </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            view Leave
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">faculty Leave</a></li>
         <li><a className="dropdown-item " href="#">Student Leave</a></li>
          </ul>
        </li>

                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fee
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Fees Structure</a></li>
         <li><a className="dropdown-item " href="#">Student Fees Form</a></li>
          </ul>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
        </>
    )
}