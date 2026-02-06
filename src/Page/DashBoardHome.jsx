import { Link } from "react-router-dom";
import "../assets/DashBoardHome.css";

export default function DashboardHome() {
  return (
    <div className="container-fluid p-4 dashboard-home">

      {/* Welcome */}
      <div className="mb-4">
        <h2 className="dashboard-title">Welcome, Admin 👋</h2>
        <p className="dashboard-subtitle">
          Quick overview of college management system
        </p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-5">

        <div className="col-md-3">
          <div className="card stat-card stat-primary text-center">
            <div className="card-body">
              <h6>Total Students</h6>
              <h2>1200</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-card stat-success text-center">
            <div className="card-body">
              <h6>Total Faculty</h6>
              <h2>85</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-card stat-warning text-center">
            <div className="card-body">
              <h6>Student Leave</h6>
              <h2>18</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-card stat-danger text-center">
            <div className="card-body">
              <h6>Faculty Leave</h6>
              <h2>6</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <h4 className="section-title mb-3">Quick Actions</h4>

      <div className="row g-4">

        <div className="col-md-3">
          <Link to="/faculty" className="text-decoration-none">
            <div className="card action-card action-primary text-center">
              <div className="card-body">
                <h6 className="fw-bold">Add Faculty</h6>
                <p className="small mb-0">Register new faculty</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/student" className="text-decoration-none">
            <div className="card action-card action-success text-center">
              <div className="card-body">
                <h6 className="fw-bold">Add Student</h6>
                <p className="small mb-0">Enroll new student</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/studentview" className="text-decoration-none">
            <div className="card action-card action-warning text-center">
              <div className="card-body">
                <h6 className="fw-bold">View Student</h6>
                <p className="small mb-0">check student details</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/facultyview" className="text-decoration-none">
            <div className="card action-card action-danger text-center">
              <div className="card-body">
                <h6 className="fw-bold">View Faculty</h6>
                <p className="small mb-0">check Faculty details</p>
              </div>
            </div>
          </Link>
        </div>
             <div className="col-md-3">
          <Link to="" className="text-decoration-none">
            <div className="card action-card action-primary text-cente">
              <div className="card-body">
                <h6 className="fw-bold">Faculty Leave</h6>
                <p className="small mb-0">Manage faculty leaves</p>
              </div>
            </div>
          </Link>
        </div>
         <div className="col-md-3">
          <Link to="/dashboard/faculty-leave" className="text-decoration-none">
            <div className="card action-card action-success text-center">
              <div className="card-body">
                <h6 className="fw-bold">Student Leave</h6>
                <p className="small mb-0">Manage faculty leaves</p>
              </div>
            </div>
          </Link>
        </div>
         <div className="col-md-3">
          <Link to="/dashboard/faculty-leave" className="text-decoration-none">
            <div className="card action-card action-warning text-center">
              <div className="card-body">
                <h6 className="fw-bold">view Faculty Leave</h6>
                <p className="small mb-0">Manage faculty leaves</p>
              </div>
            </div>
          </Link>
        </div> <div className="col-md-3">
          <Link to="/dashboard/faculty-leave" className="text-decoration-none">
            <div className="card action-card action-danger text-center">
              <div className="card-body">
                <h6 className="fw-bold">View Student Leave</h6>
                <p className="small mb-0">Manage student leaves</p>
              </div>
            </div>
          </Link>
        </div>

      </div>

    </div>
    
  );
}
