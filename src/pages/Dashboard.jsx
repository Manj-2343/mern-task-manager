import React from "react";
import { useAuth } from "../context/AuthProvider";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-mono"> Welcome, Mr. {user?.name}</h2>
      <p className="text-2xl font-mono">your email is {user?.email}</p>
    </div>
  );
};

export default Dashboard;
