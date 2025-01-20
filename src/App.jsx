import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Cards from "./components/cards";
import navItems from "./components/navItems";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        {navItems.map((item, index) => (
          <Sidebar.Item
            key={index}
            icon={item.icon}
            text={item.text}
            active={item.active}
            alert={item.alert}
          />
        ))}
      </Sidebar>

      {/* Main Content */}
      <main
        className={`flex-1 p-4  transition-all duration-500 ease-in-out ${
          isOpen ? "pl-20 lg:pl-60" : "pl-20"
        }`}
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Cards />
      </main>
    </div>
  );
};

export default App;
