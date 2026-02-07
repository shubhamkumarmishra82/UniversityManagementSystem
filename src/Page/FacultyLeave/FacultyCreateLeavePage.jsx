import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FacultyCreateLeavePage() {
  const [formData, setFormData] = useState({
    facultyName: "",
    facultyId: "",
    from: "",
    to: "",
    leaveType: "",
    reason: "",
  });
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field} field is mendatory`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
     try{
        const response = await fetch(" http://localhost:9090/faculty/leave/create" , {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({...formData})
        })
        if(response.ok){
            alert("form submited successfully")
            navigate("/dashboard")  
        }
        else{
            alert("not submited please try again")
        }
     }
     catch(error){
        console.error(error)
     }
   
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Faculty Leave Form</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit} noValidate>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Faculty Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.facultyName ? "is-invalid" : ""}`}
                  name="facultyName"
                  value={formData.facultyName}
                  onChange={handleChange}
                />
                {errors.facultyName && (
                  <div className="invalid-feedback">{errors.facultyName}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">Faculty ID</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.facultyId ? "is-invalid" : ""
                  }`}
                  name="facultyId"
                  value={formData.facultyId}
                  onChange={handleChange}
                />
                {errors.facultyId && (
                  <div className="invalid-feedback">
                    {errors.facultyId}
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">From</label>
                <input
                  type="date"
                  className={`form-control ${
                    errors.from ? "is-invalid" : ""
                  }`}
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                />
                {errors.from && (
                  <div className="invalid-feedback">
                    {errors.from}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">To</label>
                <input
                  type="date"
                  className={`form-control ${
                    errors.to ? "is-invalid" : ""
                  }`}
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                />
                {errors.to && (
                  <div className="invalid-feedback">{errors.to}</div>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Leave Type</label>
              <select
                className={`form-select ${
                  errors.leaveType ? "is-invalid" : ""
                }`}
                name="leaveType"
                value={formData.leaveType}
                onChange={handleChange}
              >
                <option value="">Select Leave Type</option>
                <option value="Medical">Medical</option>
                <option value="Personal">Personal</option>
                <option value="Family">Family</option>
                <option value="Other">Other</option>
              </select>
              {errors.leaveType && (
                <div className="invalid-feedback">{errors.leaveType}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Reason</label>
              <textarea
                className={`form-control ${
                  errors.reason ? "is-invalid" : ""
                }`}
                rows="3"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
              {errors.reason && (
                <div className="invalid-feedback">{errors.reason}</div>
              )}
            </div>

            <div className="d-flex justify-content-evenly">
              <button type="submit" className="btn btn-primary">
                Submit Leave
              </button>
              <Link to="/dashboard" className="btn btn-secondary">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
