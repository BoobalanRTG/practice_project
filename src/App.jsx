import React, { useState } from "react";
import Sidebar from "./components/sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <main
        className={`flex-1 bg-gray-200 p-4 pl-5 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-60" : "ml-0  pl-16"
        }`}
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </main>
      
    </div>
  );
};

export default App;
