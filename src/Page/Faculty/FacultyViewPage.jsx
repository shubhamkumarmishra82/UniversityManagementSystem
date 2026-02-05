import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FacultyUpdate from "./FacultyUpdate";

export default function FacultyViewPage() {
  const [facultyData, setFacultyData] = useState([]); // <-- array

  // Fetch data from API
  async function getApiData() {
    try {
      const response = await fetch("http://localhost:9090/faculty/get"); // <-- put your backend URL
      if (response.ok) {
        const data = await response.json();
        setFacultyData(data);
      } else {
        alert("Data not fetched");
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Delete faculty
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this faculty?")) {
      // Call API to delete (example)
      fetch(`http://localhost:9090/faculty/delete/${id}`, { method: "DELETE" })
        .then((res) => {
          if (res.ok) {
            // Remove deleted item from state
            setFacultyData(facultyData.filter((f) => f.id !== id));
          }
        })
        .catch((err) => console.error(err));
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="fw-bold text-primary mb-4">Faculty List</h4>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Name</th>
               <th>FacultyId</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Aadhar</th>
              <th>Graduation Marks</th>
              <th>Department</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {facultyData?.map((faculty) => (
              <tr key={faculty.id} className="text-center">
                <td>{faculty.id}</td>
                <td>{faculty.name}</td>
                <td>{faculty.facultyid}</td>
                <td>{faculty.email}</td>
                <td>{faculty.phone}</td>
                <td>{faculty.aadhar}</td>
                <td>{faculty.graduationMarks}</td>
                <td>{faculty.departments}</td>

                {/* Update Icon */}
                <td>
                  <Link
                    to={`/facultyupdate/${faculty.id}`} 
                    className="text-primary fs-5"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Link>
                </td>

                {/* Delete Icon */}
                <td>
                  <span
                    style={{ cursor: "pointer" }}
                    className="text-danger fs-5"
                    onClick={() => handleDelete(faculty.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

          {/* Back Row */}
          <tfoot>
            <tr className="bg-light fs-5 text-center">
              <td colSpan={10}>
                <NavLink
                  to="/dashboard"
                  className="text-decoration-none text-dark"
                >
                  Back
                </NavLink>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
