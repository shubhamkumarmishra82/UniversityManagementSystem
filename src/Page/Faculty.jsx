import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Faculty() {
  const [faculty, setFaculty] = useState({
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    graduationMarks: "",
    department: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Faculty:", faculty);
    setFaculty({
      name: "",
      email: "",
      phone: "",
      aadhar: "",
      graduationMarks: "",
      department: "",
      dob: "",
    });
    alert("Faculty added successfully!");
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            textAlign: "center",
            color: "#0d47a1",
            fontWeight: "bold",
          }}
        >
          Add New Faculty
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={faculty.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter faculty name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={faculty.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={faculty.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Aadhar */}
          <div className="mb-3">
            <label className="form-label">Aadhar Number</label>
            <input
              type="text"
              name="aadhar"
              value={faculty.aadhar}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Aadhar number"
              required
            />
          </div>

          {/* Graduation Marks */}
          <div className="mb-3">
            <label className="form-label">Graduation Marks (%)</label>
            <input
              type="number"
              name="graduationMarks"
              value={faculty.graduationMarks}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter graduation marks"
              required
            />
          </div>

          {/* Department */}
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              name="department"
              value={faculty.department}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter department"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={faculty.dob}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Centered Add Button */}
          <div style={{ textAlign: "center", marginTop: "20px" }} className="d-flex flex-direction-row justify-content-evenly">
            <button type="submit" className="btn btn-primary px-5">
              Add Faculty
            </button>
            <NavLink to="/dashboard" className="btn btn-primary px-5" >Back</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
};


