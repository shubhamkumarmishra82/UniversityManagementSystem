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
import StudentCreatePage from "./Page/Student/StudentCreatePage";
import StudentViewPage from "./Page/Student/StudentViewPage";
import StudentUpdatePage from "./Page/Student/StudentUpdatePage";
import StudentCreateLeaveForm from "./Page/StudentLeave/StudentCreateLeavePage";
import StudentViewLeavePage from "./Page/StudentLeave/StudentViewLeavePage";
import StudentUpdateLeaveForm from "./Page/StudentLeave/StudentUpdateLeavePage";

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
         <Route path="/student" element={<StudentCreatePage/>}></Route>
         <Route path="/studentview" element={<StudentViewPage/>}></Route>
         <Route path="/studentupdate/:id" element={<StudentUpdatePage/>} />  
         <Route path="/studentleave" element={<StudentCreateLeaveForm/>}></Route>
         <Route path="//student/view/leave" element={<StudentViewLeavePage/>}></Route>
         <Route path="/student/leave/update/:id" element={<StudentUpdateLeaveForm/>}></Route>
 
       
      </Routes>
    </BrowserRouter>

  );
}
