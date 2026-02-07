import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function FacultyLeaveViewPage() {
  const [leaves, setLeaves] = useState([]);
  

  useEffect(() => {
    fetchLeaves();
  }, []);

 const handleDelete = async (id) =>{
    try{
          const response = await fetch(` http://localhost:9090/faculty/leave/delete/${id}` , {
        method:"DELETE"
      })
      if(response.ok){
        fetchLeaves()
      }
      else{
        alert("please try again something wrong")
      }
    }
    catch(error){
        console.error(error)
    }
  }


  const fetchLeaves = async () => {
    try {
      const response = await fetch(" http://localhost:9090/faculty/leave/all")
     if(response.ok){
        const data = await response.json()
         setLeaves(data);
     }
    } catch (error) {
      console.error("Error fetching leaves", error);
    }
 
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h4 className="mb-0">Faculty Leave List</h4>
          <Link to="/dashboard" className="btn btn-light btn-sm">
            Back
          </Link>
        </div>

        <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Id</th>
                    <th>Faculty Name</th>
                    <th>Faculty ID</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Leave Type</th>
                    <th>Reason</th>
                      <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {leaves.map((leave, index) => (
                    <tr key={index}>
                       <td>{leave.id}</td>
                      <td>{leave.facultyName}</td>
                      <td>{leave.facultyId}</td>
                      <td>{leave.from}</td>
                      <td>{leave.to}</td>
                      <td>{leave.leaveType}</td>
                      <td>{leave.reason}</td>
                            <td>
                        <Link
                    to={`/faculty/leave/update/${leave.id}`} 
                    className="text-primary fs-5"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Link>
                </td>
                      <td>
                        <span
                          style={{ cursor: "pointer" }}
                          className="text-danger fs-5"
                          onClick={() => handleDelete(leave.id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          
        </div>
      </div>
    </div>
  );
}
