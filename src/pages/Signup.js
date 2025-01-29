import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupUser({ name, email, password });
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSignup}>
        <h2 className="text-3xl mb-4">Sign Up</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border-2 border-gray-300 p-2 w-full mb-4"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-2 border-gray-300 p-2 w-full mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-2 border-gray-300 p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
