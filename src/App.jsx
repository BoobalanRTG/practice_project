import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import UserCreation from "./pages/userCreation";
import DeviceCreation from "./pages/deviceCreation";
import Tanklist from "./pages/tanklist";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main
        className={`flex-1 transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "pl-20 lg:pl-60" : "pl-18"
        }`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/usercreation" element={<UserCreation />} />
          <Route path="/devicecreation" element={<DeviceCreation />} />
          <Route path="/tanklist" element={<Tanklist />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
