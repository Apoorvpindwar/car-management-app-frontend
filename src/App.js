import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail";
import CreateCar from "./pages/CreateCar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cars"
            element={
              <ProtectedRoute>
                <CarList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cars/:id"
            element={
              <ProtectedRoute>
                <CarDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-car"
            element={
              <ProtectedRoute>
                <CreateCar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
