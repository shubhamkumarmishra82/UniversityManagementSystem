import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";
import Navbar1 from "./Component/navbar1";
import CreateAdmin from "./Page/CreateAdmin";
import AdminLogin from "./Page/AdminLogin";
import DashBoard from "./Page/DashBoard";
import { useState } from "react";


export default function App(){
      const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <>
       <BrowserRouter>
       {isLoggedIn?<DashBoard/>:<Navbar1/>}
        
       <Routes>
       <Route path="/" element={ <HomePage/>}></Route>
       <Route path="/create" element={ <CreateAdmin/>}></Route>
        <Route path="/login" element={ <AdminLogin setIsLoggedIn={setIsLoggedIn}/>}></Route>
       
        
       </Routes>
      {setIsLoggedIn?"": <Footer/>}
       </BrowserRouter>
        </>
    )
}