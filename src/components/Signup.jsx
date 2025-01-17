import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and Password are required!");
      return;
    }
    const existingUser = JSON.parse(localStorage.getItem("users") || "[]").find(
      (user) => user.username === username
    );

    if (existingUser) {
      setError("User already exists!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please log in.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://akriviahcm.com/blog/wp-content/uploads/2024/01/features-of-employee-management-system.png')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white relative p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Signup</h1>
        
        <form onSubmit={handleSignup}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Signup
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account? <a href="/" className="text-indigo-600 hover:underline">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
