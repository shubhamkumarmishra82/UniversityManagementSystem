import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function StudentUpdatePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    studentRollNumber: "",
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

  // 🔹 Get student data by ID
  const getApiData = async () => {
    try {
      const response = await fetch(
        `http://localhost:9090/student/get/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        alert("Data fetch nahi hua");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, [id]);

  // 🔹 Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "course" && value !== "B.TECH" ? { branch: "" } : {}),
    }));
  };

  // 🔹 Update student
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:9090/student/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Student updated successfully!");
        navigate("/dashboard");
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Update Student</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* PERSONAL DETAILS */}
            <h5 className="mb-3">Personal Details</h5>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Student Name</label>
                <input
                  name="studentName"
                  value={formData.studentName}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label>Father Name</label>
                <input
                  name="fatherName"
                  value={formData.fatherName}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label>DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>MALE</option>
                  <option>FEMALE</option>
                  <option>OTHER</option>
                </select>
              </div>

              <div className="col-md-4">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>GENERAL</option>
                  <option>OBC</option>
                  <option>SC</option>
                  <option>ST</option>
                </select>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <h5 className="mb-3 mt-4">Contact Details</h5>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Email</label>
                <input
                  name="email"
                  value={formData.email}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Emergency Contact</label>
                <input
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            {/* ACADEMIC DETAILS */}
            <h5 className="mb-3 mt-4">Academic Details</h5>

            <div className="row mb-3">
              <div className="col-md-4">
                <label>Aadhar</label>
                <input
                  name="aadhar"
                  value={formData.aadhar}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label>X Marks (%)</label>
                <input
                  type="number"
                  name="xMarks"
                  value={formData.xMarks}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label>XII Marks (%)</label>
                <input
                  type="number"
                  name="xiiMarks"
                  value={formData.xiiMarks}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>School / College</label>
                <input
                  name="college"
                  value={formData.college}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Year of Passing</label>
                <input
                  type="number"
                  name="yearOfPassing"
                  value={formData.yearOfPassing}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Course</label>
                <select
                  name="course"
                  value={formData.course}
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>B.TECH</option>
                  <option>BCA</option>
                  <option>BBA</option>
                  <option>MCA</option>
                  <option>MBA</option>
                </select>
              </div>
            </div>

            {formData.course === "B.TECH" && (
              <div className="mb-3">
                <label>Branch</label>
                <select
                  name="branch"
                  value={formData.branch}
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>COMPUTER SCIENCE</option>
                  <option>MECHANICAL</option>
                  <option>ELECTRICAL</option>
                  <option>CIVIL</option>
                </select>
              </div>
            )}

            <div className="mb-3">
              <label>Roll Number</label>
              <input
                value={formData.studentRollNumber}
                className="form-control"
                readOnly
              />
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-primary px-5 me-4">
                Update
              </button>
              <Link to="/dashboard" className="btn btn-secondary px-5">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
