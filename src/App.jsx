import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Cards from "./components/cards";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main
        className={`flex-1 bg-gray-200 p-4 transition-all duration-500 ease-in-out ${
          isOpen ? "md:ml-60 ml-0" : "ml-0 pl-16"
        }`}
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Cards />
      </main>
    </div>
  );
};

export default App;