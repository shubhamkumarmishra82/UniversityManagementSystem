import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";
import Navbar1 from "./Component/navbar1";
import CreateAdmin from "./Page/CreateAdmin";
import AdminLogin from "./Page/AdminLogin";
import DashBoard from "./Page/DashBoard";
import Logout from "./Page/LogoutPage";
import Faculty from "./Page/Faculty";



export default function App() {
  

  return (
    <BrowserRouter>
      
      

      <Routes>
           <Route path="/" element={<><Navbar1/><HomePage/></>}></Route>
           <Route path="/login" element={<><Navbar1/><AdminLogin/></>}></Route>
           <Route path="/create" element={<><Navbar1/><CreateAdmin/></>}></Route>
           <Route path="/dashboard" element={<DashBoard/>}></Route>
            <Route path="/dashboard/faculty" element={<Faculty/>}></Route>
             <Route path="/dashboard" element={<DashBoard/>}></Route>
               <Route path="/logout" element={<Logout/>}></Route>

      </Routes>

      <Footer/>
    </BrowserRouter>

  );
}
