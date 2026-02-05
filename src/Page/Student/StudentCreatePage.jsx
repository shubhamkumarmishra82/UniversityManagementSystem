import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentCreatePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    dob: "",
    gender: "",
    category: "",
    email: "",
    phone: "",
    emergencyContact: "",
    address: "",
    aadhar: "",
    xMarks: "",
    xiiMarks: "",
    college: "",
    yearOfPassing: "",
    course: "",
    branch: "",
  });

  const [errors, setErrors] = useState({});
  const [rollNumber, setRollNumber] = useState("");

  // Generate student roll number
  const generateStudentId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    return `ACEM-${year}-${random}`;
  };

  useEffect(() => {
    setRollNumber(generateStudentId());
  }, []);

  // Handle input changes (auto-uppercase in state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form fields
  const validateForm = () => {
  let newErrors = {};

  Object.keys(formData).forEach((field) => {
    // branch ko skip karo jab course B.TECH nahi hai
    if (field === "branch" && formData.course !== "B.TECH") {
      return;
    }

    if (!formData[field] || formData[field].trim() === "") {
      newErrors[field] = `${
        field.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())
      } is mandatory`;
    }
  });

  // extra safety (optional but clean)
  if (formData.course === "B.TECH" && !formData.branch) {
    newErrors.branch = "Branch is mandatory for B.Tech";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:9090/student/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          studentRollNumber: rollNumber,
        }),
      });

      if (response.ok) {
        alert("Student created successfully!");
        navigate("/dashboard");
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred. Check console.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Student Registration Form</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Personal Details */}
            <h5 className="mb-3">Personal Details</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  className={`form-control ${errors.studentName ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.studentName && <small className="text-danger">{errors.studentName}</small>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Father's Name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  className={`form-control ${errors.fatherName ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.fatherName && <small className="text-danger">{errors.fatherName}</small>}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.dob && <small className="text-danger">{errors.dob}</small>}
              </div>
              <div className="col-md-4">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  className={`form-select ${errors.gender ? "is-invalid" : ""}`}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>MALE</option>
                  <option>FEMALE</option>
                  <option>OTHER</option>
                </select>
                {errors.gender && <small className="text-danger">{errors.gender}</small>}
              </div>
              <div className="col-md-4">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  className={`form-select ${errors.category ? "is-invalid" : ""}`}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>GENERAL</option>
                  <option>OBC</option>
                  <option>SC</option>
                  <option>ST</option>
                </select>
                {errors.category && <small className="text-danger">{errors.category}</small>}
              </div>
            </div>

            {/* Contact Details */}
            <h5 className="mb-3 mt-4">Contact Details</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="col-md-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>
              <div className="col-md-3">
                <label className="form-label">Emergency Contact</label>
                <input
                  type="tel"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  className={`form-control ${errors.emergencyContact ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.emergencyContact && (
                  <small className="text-danger">{errors.emergencyContact}</small>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                rows="2"
                value={formData.address}
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                onChange={handleChange}
              ></textarea>
              {errors.address && <small className="text-danger">{errors.address}</small>}
            </div>

            {/* Academic Details */}
            <h5 className="mb-3 mt-4">Academic Details</h5>
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Aadhar Number</label>
                <input
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  className={`form-control ${errors.aadhar ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.aadhar && <small className="text-danger">{errors.aadhar}</small>}
              </div>
              <div className="col-md-4">
                <label className="form-label">X Marks (%)</label>
                <input
                  type="number"
                  name="xMarks"
                  value={formData.xMarks}
                  className={`form-control ${errors.xMarks ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.xMarks && <small className="text-danger">{errors.xMarks}</small>}
              </div>
              <div className="col-md-4">
                <label className="form-label">XII Marks (%)</label>
                <input
                  type="number"
                  name="xiiMarks"
                  value={formData.xiiMarks}
                  className={`form-control ${errors.xiiMarks ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.xiiMarks && <small className="text-danger">{errors.xiiMarks}</small>}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">School / College Name</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  className={`form-control ${errors.college ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.college && <small className="text-danger">{errors.college}</small>}
              </div>
              <div className="col-md-3">
                <label className="form-label">Year of Passing</label>
                <input
                  type="number"
                  name="yearOfPassing"
                  value={formData.yearOfPassing}
                  className={`form-control ${errors.yearOfPassing ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.yearOfPassing && (
                  <small className="text-danger">{errors.yearOfPassing}</small>
                )}
              </div>
              <div className="col-md-3">
                <label className="form-label">Course</label>
                <select
                  name="course"
                  value={formData.course}
                  className={`form-select ${errors.course ? "is-invalid" : ""}`}
                  onChange={handleChange}
                >
                  <option value="">Select Course</option>
                  <option>B.TECH</option>
                  <option>BCA</option>
                  <option>BBA</option>
                  <option>MCA</option>
                  <option>MBA</option>
                </select>
                {errors.course && <small className="text-danger">{errors.course}</small>}
              </div>
            </div>

            {formData.course === "B.TECH" && (
              <div className="mb-3">
                <label className="form-label">Branch</label>
                <select
                  name="branch"
                  value={formData.branch}
                  className={`form-select ${errors.branch ? "is-invalid" : ""}`}
                  onChange={handleChange}
                >
                  <option value="">Select Branch</option>
                  <option>MECHANICAL</option>
                  <option>ELECTRICAL</option>
                  <option>COMPUTER SCIENCE</option>
                  <option>CIVIL</option>
                </select>
                {errors.branch && <small className="text-danger">{errors.branch}</small>}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Student Roll Number</label>
              <input value={rollNumber} className="form-control" readOnly />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary px-5 me-5">
                Submit
              </button>
              <Link to="/dashboard" className="btn btn-primary ms-5 px-5">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
