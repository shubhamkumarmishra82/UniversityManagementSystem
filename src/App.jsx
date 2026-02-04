import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";
import Navbar1 from "./Component/navbar1";
import CreateAdmin from "./Page/CreateAdmin";
import AdminLogin from "./Page/AdminLogin";
import DashBoard from "./Page/DashBoard";
import Logout from "./Page/LogoutPage";

import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* Navbar for non-logged users */}
      {!isLoggedIn && <Navbar1 />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateAdmin />} />
        <Route path="/login" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />

        {/* Dashboard with nested routes */}
        {isLoggedIn && <Route path="/dashboard/*" element={<DashBoard />} />}

        {/* Redirect unknown paths */}
        <Route path="/dashboard/faculty" element={<Navigate to="/" />} />
      </Routes>

      {/* Footer */}
      {!isLoggedIn && <Footer />}
    </BrowserRouter>
  );
}
