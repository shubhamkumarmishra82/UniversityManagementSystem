import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudentViewLeavePage() {
  const [leaves, setLeaves] = useState([]);



  const fetchLeaves = async () => {
    try {
      const response = await fetch(" http://localhost:9090/student/leave/get"); 
      if (!response.ok) {
        throw new Error("Failed to fetch leaves");
      }
      const data = await response.json();
      setLeaves(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching leave data");
    } 
  
  };

  useEffect(() => {
    fetchLeaves();
  }, []);


  const handleDelete = async (id) =>{
    try{
          const response = await fetch(` http://localhost:9090/student/leave/delete/${id}` , {
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

  return (
    <div className="container mt-5">
      <h3 className="mb-4">My Leave Requests</h3>

      {leaves.length === 0 ? (
        <p>No leave requests found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-primary">
              <tr>
                <th>StudentName</th>
                <th>RollNumber</th>
                <th>Course</th>
                <th>LeaveType</th>
                <th>From</th>
                <th>To</th>
                  <th>Reason</th>
                   <th>Update</th>
                    <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr key={leave.id}>
                    <td>{leave.studentName}</td>
                  <td>{leave.rollNumber}</td>
                  <td>{leave.course}</td>
                 <td>{leave.leaveType}</td>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
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
            <tfoot>
               <tr>
                <td colSpan={9} >
                     <Link to="/dashboard" className="btn btn-secondary w-100">
                   Back
                </Link>
                </td>
               </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
