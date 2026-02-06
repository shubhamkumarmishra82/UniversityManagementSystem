import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentUpdateLeaveForm() {
  const navigate = useNavigate();
   const {id} = useParams()
  // Form state
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    course: "",
    leaveType: "",
    from: "",
    to: "",
    reason: "",
  });

const getApiData = async ()=>{
    try{
const response = await fetch(` http://localhost:9090/student/leave/get/${id}`)
if(response.ok){
    const data = await response.json()
    setFormData(data)
}
else{
    alert("data not fetching")
}
    }
    catch(error){
        console.error(error);
    }
  }
  useEffect(()=>{
    getApiData()
  },[])
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
 try {
      // POST request to backend
      const response = await fetch(`http://localhost:9090/student/leave/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Leave applied successfully!");
        navigate("/dashboard");
      } else {
        alert("Failed to apply leave. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Check console.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Student Leave Form</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Student Info */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <label>Roll Number</label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Course and Leave Type */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Course</option>
                  <option>B.TECH</option>
                  <option>BCA</option>
                  <option>BBA</option>
                  <option>MCA</option>
                  <option>MBA</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Leave Type</label>
                <select
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option>MEDICAL</option>
                  <option>PERSONAL</option>
                  <option>FAMILY</option>
                  <option>OTHER</option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label>From Date</label>
                <input
                  type="date"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <label>To Date</label>
                <input
                  type="date"
                  name="to"
                  value={formData.to}
               
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Reason */}
            <div className="mb-3">
              <label>Reason</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="form-control"
                rows="3"
                required
              />
            </div>

            {/* Buttons */}
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary px-5 me-4">
                Apply Leave
              </button>
              <button
                type="button"
                className="btn btn-secondary px-5"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
