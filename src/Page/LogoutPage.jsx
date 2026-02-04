import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
   localStorage.removeItem("isLoggedIn");
setIsLoggedIn(false);
 
    navigate("/");
  }, [navigate, setIsLoggedIn]);

  return <h3>Logging out...</h3>;
};

export default Logout;
