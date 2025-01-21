import React from "react";
import user from "../assets/itank-white.png";

const Dashboard = () => {
  return (
    <>
    <div className="bg-blue-200 rounded-md px-4 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <img
              src={user}
              alt="User"
              className="rounded-full h-10 w-10 border-2 bg-gray-200"
            />
          </div>
          <div className="text-left">
            <h1 className="text-sm font-bold">Admin</h1>
            <p className="text-xs">Boobalan</p>
          </div>
        </div>
      </div>
    </div>
    <h2>hello world</h2>
    </>
  );
};

export default Dashboard;
