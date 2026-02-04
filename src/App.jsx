import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";

import Navbar1 from "./Component/navbar1";
import CreateAdmin from "./Page/CreateAdmin";
import AdminLogin from "./Page/AdminLogin";
import DashBoard from "./Page/DashBoard";
import LogoutPage from "./Page/LogoutPage";
import Faculty from "./Page/Faculty";
import FacultyView from "./Page/Faculty/FacultyViewPage";
import FacultyUpdate from "./Page/Faculty/FacultyUpdate";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar1 /><HomePage /></>}></Route>
        <Route path="/login" element={<><Navbar1 /><AdminLogin /></>}></Route>
        <Route path="/create" element={<><Navbar1 /><CreateAdmin /></>}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/logout" element={<LogoutPage/>}></Route>
        <Route path="/faculty" element={<Faculty/>}></Route>
        <Route path="/facultyview" element={<FacultyView/>}></Route>
          <Route path="/facultyupdate/:id" element={<FacultyUpdate/>} />


       
      </Routes>
    </BrowserRouter>

  );
}
