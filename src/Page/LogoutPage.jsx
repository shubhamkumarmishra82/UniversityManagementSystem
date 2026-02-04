import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
     localStorage.removeItem("email")
     localStorage.removeItem("password")

 
    navigate("/");
  }, [navigate]);

  return <h3>Logging out...</h3>;
};

export default Logout;
