import  { useState } from "react";
import "../assets/CreateAdmin.css";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate()

  

  const handleSubmit = async (e) => {
    e.preventDefault();
       try{
          
           const response = await fetch("http://localhost:9090/admin/login" , {
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({
              email:email,
              password:password
            })
           })
           if(response.ok){
            navigate("/dashboard")
           }
           else{
            alert("email and password incorrect")
           }
       }
       catch(error){
        console.log(error)
       }
  };

  return (
    <div className="create-admin-page d-flex align-items-center justify-content-center">
      <div className="card create-admin-card p-4 shadow">
        <h2 className="text-center mb-4"> Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

         

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
            Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
