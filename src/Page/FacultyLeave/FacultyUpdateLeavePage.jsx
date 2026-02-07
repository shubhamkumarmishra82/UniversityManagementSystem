import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function FacultyUpdateLeavePage() {
const {id} = useParams();
const [formData, setFormData] = useState({
    facultyName: "",
    facultyId: "",
    from: "",
    to: "",
    leaveType: "",
    reason: "",
  });
  const navigate = useNavigate()

const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
try{
        const response = await fetch(" http://localhost:9090/faculty/leave/create" , {
            method:"PUT",
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
}

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
                  className={`form-control`}
                  name="facultyName"
                  value={formData.facultyName}
                  onChange={handleChange}
                />
        
              </div>

              <div className="col-md-6">
                <label className="form-label">Faculty ID</label>
                <input
                  type="text"
                  className={`form-control`}
                  name="facultyId"
                  value={formData.facultyId}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">From</label>
                <input
                  type="date"
                  className={`form-control`}
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">To</label>
                <input
                  type="date"
                  className={`form-control`}
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Leave Type</label>
              <select
                className={`form-select`}
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
            </div>

            <div className="mb-3">
              <label className="form-label">Reason</label>
              <textarea
                className={`form-control`}
                rows="3"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
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
