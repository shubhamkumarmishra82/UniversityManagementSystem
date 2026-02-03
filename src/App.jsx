import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";
import Navbar1 from "./Component/navbar1";
import CreateAdmin from "./Page/CreateAdmin";
import AdminLogin from "./Page/AdminLogin";
import DashBoard from "./Page/DashBoard";


export default function App(){
    return(
        <>
       <BrowserRouter>
     <Navbar1/>
    <DashBoard/>
       <Routes>
       <Route path="/" element={<HomePage/>}></Route>
       <Route path="/create" element={<CreateAdmin/>}></Route>
        <Route path="/login" element={<AdminLogin/>}></Route>
        <Route path="/login" element={<AdminLogin/>}></Route>
        
       </Routes>
       <Footer/>
       </BrowserRouter>
        </>
    )
}