import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";
import Navbar1 from "./Component/navbar1";

export default function App(){
    return(
        <>
       <BrowserRouter>
     <Navbar1/>
       <Routes>
       <Route path="/" element={<HomePage/>}></Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
        </>
    )
}