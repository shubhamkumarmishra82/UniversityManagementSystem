import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentViewPage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:9090/student/getall");
      const data = await res.json();
      setStudents(Array.isArray(data) ? data : []); // ensure it's an array
    } catch (err) {
      console.error("Error fetching students", err);
      setStudents([]);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      const res = await fetch(` http://localhost:9090/student/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Student deleted successfully");
        fetchStudents();
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div className="container-fluid mt-3">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Student List</h4>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive" style={{ maxHeight: "80vh" }}>
            <table className="table table-bordered table-hover text-center align-middle mb-0">
              <thead className="table-dark sticky-top">
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Father's Name</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Category</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Emergency Contact</th>
                  <th>Address</th>
                  <th>Aadhar</th>
                  <th>X Marks</th>
                  <th>XII Marks</th>
                  <th>College</th>
                  <th>Year of Passing</th>
                  <th>Course</th>
                  <th>Branch</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan="19">No students found</td>
                  </tr>
                ) : (
                  students.map((s) => (
                    <tr key={s.id}>
                      <td>{s.studentRollNumber}</td>
                      <td>{s.studentName}</td>
                      <td>{s.fatherName}</td>
                      <td>{s.dob}</td>
                      <td>{s.gender}</td>
                      <td>{s.category}</td>
                      <td>{s.email}</td>
                      <td>{s.phone}</td>
                      <td>{s.emergencyContact}</td>
                      <td>{s.address}</td>
                      <td>{s.aadhar}</td>
                      <td>{s.xMarks}</td>
                      <td>{s.xiiMarks}</td>
                      <td>{s.college}</td>
                      <td>{s.yearOfPassing}</td>
                      <td>{s.course}</td>
                      <td>{s.branch ? s.branch : ""}</td>
                        <td>
                        <Link
                    to={`/studentupdate/${s.id}`} 
                    className="text-primary fs-5"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Link>
                </td>
                      <td>
                        <span
                          style={{ cursor: "pointer" }}
                          className="text-danger fs-5"
                          onClick={() => handleDelete(s.id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
                  <tfoot>
            <tr className="bg-light fs-5 text-center">
              <td colSpan={19}>
                <Link
                  to="/dashboard"
                  className="text-decoration-none text-dark"
                >
                  Back
                </Link>
              </td>
            </tr>
          </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
