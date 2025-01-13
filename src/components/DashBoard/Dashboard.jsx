import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center">
      <h4 className="text-3xl underline">User Dashboard</h4>
      <p> User : {user.email}</p>
    </div>
  );
};

export default Dashboard;
