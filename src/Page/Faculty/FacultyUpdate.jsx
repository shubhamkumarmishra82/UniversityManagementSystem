import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function FacultyUpdate() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  // ✅ SINGLE STATE FOR FORM
  const [formData, setFormData] = useState({
    name: "",
    facultyid: "",
    email: "",
    phone: "",
    aadhar: "",
    marks: "",
    department: "",
  });

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FETCH FACULTY BY ID (FROM URL)
  const getApiData = async () => {
    try {
      const response = await fetch(
        `http://localhost:9090/faculty/get/${id}`
      );

      if (response.ok) {
        const data = await response.json();

        setFormData({
          name: data.name || "",
          facultyid: data.facultyid || "",
          email: data.email || "",
          phone: data.phone || "",
          aadhar: data.aadhar || "",
          marks: data.graduationMarks || "",
          department: data.departments || "",
        });
      } else {
        alert("Failed to fetch faculty data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ LOAD DATA ON PAGE LOAD
  useEffect(() => {
    getApiData();
  }, [id]);

  // ✅ UPDATE FACULTY
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:9090/faculty/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            facultyid: formData.facultyid,
            email: formData.email,
            phone: formData.phone,
            aadhar: formData.aadhar,
            graduationMarks: formData.marks,
            departments: formData.department,
          }),
        }
      );

      if (response.ok) {
        alert("Faculty Updated Successfully");
        navigate("/dashboard");
      } else {
        alert("Error updating faculty");
      }
    } catch (error) {
      console.error(error);
    }
  };
      
  return (

    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h4 className="fw-bold text-primary mb-4">Update Faculty</h4>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Faculty ID</label>
                <input
                  type="text"
                  name="facultyid"
                  className="form-control"
                  value={formData.facultyid}
                  readOnly
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Aadhar Number</label>
                <input
                  type="text"
                  name="aadhar"
                  className="form-control"
                  value={formData.aadhar}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Graduation Marks (%)</label>
                <input
                  type="number"
                  name="marks"
                  className="form-control"
                  value={formData.marks}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Department</label>
                <select
                  name="department"
                  className="form-select"
                  value={formData.department}
                  onChange={handleChange}
                >
              
                  <option value="Computer Science">Computer Science</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Civil">Civil</option>
                </select>
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-evenly">
              <button type="submit" className="btn btn-primary">
                Update Faculty
              </button>

              <Link to="/facultyview" className="btn btn-outline-secondary">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
