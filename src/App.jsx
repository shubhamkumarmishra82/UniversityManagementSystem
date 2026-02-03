import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";

export default function App(){
    return(
        <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/" element={<HomePage/>}></Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
        </>
    )
}