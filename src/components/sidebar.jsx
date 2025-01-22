import React, { createContext, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { LayoutDashboard, LifeBuoy, UserPlus, Database,SatelliteDish } from "lucide-react"; // Icons
import { ChevronLast, ChevronFirst } from "lucide-react";

// Create a context for Sidebar state
const SidebarContext = createContext();

export default function Sidebar({ isOpen, setIsOpen }) {
  const [expanded, setExpanded] = useState(isOpen);

  // Define the navigation items here
  const navItems = [
    { text: "Dashboard", icon: <LayoutDashboard />, path: "/", alert: false },
    { text: "User", icon: <UserPlus />, path: "/usercreation", alert: false },
    { text: "Device", icon: <SatelliteDish />, path: "/devicecreation", alert: false },
    { text: "Tanklist", icon: <Database />, path: "/tanklist", alert: false },
    { text: "Help", icon: <LifeBuoy />, path: "/help", alert: false },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-blue-200 shadow-xl z-50 transition-all rounded-r-xl duration-500 ease-in-out ${
        expanded ? "w-60" : "w-16"
      }`}
    >
      <nav className="h-full flex flex-col">
        {/* Header Section */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1
            className={`transition-all duration-500 text-2xl font-bold overflow-hidden ${
              expanded ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
          >
            iTank
          </h1>
          <button
            onClick={() => {
              setExpanded((curr) => !curr);
              setIsOpen(!expanded);
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Navigation Items */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {navItems.map((item, index) => (
              <Sidebar.Item
                key={index}
                icon={item.icon}
                text={item.text}
                path={item.path}
                alert={item.alert}
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        {/* Footer Section */}
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User Avatar"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Boobalan</h4>
              <span className="text-xs text-gray-600">Admin</span>
            </div>
            {/* <MoreVertical size={20} /> */}
          </div>
        </div>
      </nav>
    </aside>
  );
}

// Sidebar Item Component
Sidebar.Item = function SidebarItem({ icon, text, path, alert }) {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  const isActive = location.pathname === path; // Check if this item is active

  const handleNavigation = () => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <li
      onClick={handleNavigation}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        isActive
          ? "bg-pink-500 text-white" // Active item styles
          : "hover:bg-pink-100 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {text}
        </div>
      )}
    </li>
  );
};
