import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Car Management</h1>
      <div>
        <Link to="/" className="text-white mx-2">
          Home
        </Link>
        <Link to="/cars" className="text-white mx-2">
          My Cars
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
