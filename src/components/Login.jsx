import { useState } from "react";
import { saveTokenWithExpiry } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      setError("Invalid username or password!");
      return;
    }

    const dummyToken = "dummyJWTToken_" + Math.random().toString(36).substring(7);
    saveTokenWithExpiry(dummyToken, 5 * 60 * 1000);
    console.log("Generated Token:", dummyToken);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://akriviahcm.com/blog/wp-content/uploads/2024/01/features-of-employee-management-system.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white shadow-lg rounded-lg p-8 md:w-1/3 w-11/12 z-10">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
