import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Faculty() {
  const navigate = useNavigate();
  const generateFacultyId = () => {

    const random = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    return `acem-${year}-${random}`;
  };

  const [formData, setFormData] = useState({
    name: "",
    facultyid: generateFacultyId(),
    email: "",
    phone: "",
    aadhar: "",
    marks: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

  // Update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is mandatory";
    if (!formData.email) newErrors.email = "Email is mandatory";
    if (!formData.phone) newErrors.phone = "Phone is mandatory";
    if (!formData.aadhar) newErrors.aadhar = "Aadhar number is mandatory";
    if (!formData.marks) newErrors.marks = "Graduation marks are mandatory";
    if (!formData.department) newErrors.department = "Department is mandatory";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await fetch("http://localhost:9090/faculty/create", {
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
      });

      if (response.ok) {
        alert(`${formData.name} Created Successfully`);
        navigate("/dashboard");
      } else {
        alert("Error creating faculty");
      }
    }
  };

  // Optional: regenerate Faculty ID when component mounts
  useEffect(() => {
    setFormData((prev) => ({ ...prev, facultyid: generateFacultyId() }));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h4 className="fw-bold text-primary mb-4">Add Faculty</h4>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Name */}
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              {/* Faculty ID */}
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

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>

              {/* Aadhar */}
              <div className="col-md-6">
                <label className="form-label">Aadhar Number</label>
                <input
                  type="text"
                  name="aadhar"
                  className={`form-control ${errors.aadhar ? "is-invalid" : ""}`}
                  value={formData.aadhar}
                  onChange={handleChange}
                />
                {errors.aadhar && <small className="text-danger">{errors.aadhar}</small>}
              </div>

              {/* Graduation Marks */}
              <div className="col-md-6">
                <label className="form-label">Graduation Marks (%)</label>
                <input
                  type="number"
                  name="marks"
                  className={`form-control ${errors.marks ? "is-invalid" : ""}`}
                  value={formData.marks}
                  onChange={handleChange}
                />
                {errors.marks && <small className="text-danger">{errors.marks}</small>}
              </div>

              {/* Department */}
              <div className="col-md-12">
                <label className="form-label">Department</label>
                <select
                  name="department"
                  className={`form-select ${errors.department ? "is-invalid" : ""}`}
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option>Computer Science</option>
                  <option>Mechanical</option>
                  <option>Electrical</option>
                  <option>Civil</option>
                </select>
                {errors.department && (
                  <small className="text-danger">{errors.department}</small>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 d-flex justify-content-evenly">
              <button type="submit" className="btn btn-primary">
                Add Faculty
              </button>

              <Link to="/dashboard" className="btn btn-outline-secondary">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
