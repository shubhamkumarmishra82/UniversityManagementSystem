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
           Facality
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">add Info</a></li>
         <li><a className="dropdown-item" href="#">Update info</a></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Student
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Add information</a></li>
         <li><a className="dropdown-item" href="#">Update Inforamtion</a></li>
          </ul>
        </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Student Leave
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item " href="#">Add information</a></li>
         <li><a className="dropdown-item " href="#">Update Inforamtion</a></li>
          </ul>
        </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facality leave
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Add information</a></li>
         <li><a className="dropdown-item " href="#">Update Inforamtion</a></li>
          </ul>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
        </>
    )
}