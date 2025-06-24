import React, { useState } from "react";
import { loginUser } from "../services/authServices";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await loginUser(formData);
      setUser(res.user);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-pink-100 to-red-200 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-red-500 mb-8">
          Login to your account
        </h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="font-semibold text-lg">Login</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full my-3 px-3 py-3 outline-none rounded-md bg-gray-200 focus:ring-2 focus:ring-red-300"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-semibold text-lg">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full my-3 px-3 py-3 outline-none rounded-md bg-gray-200 focus:ring-2 focus:ring-red-300"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="w-full bg-red-600 text-gray-50 py-3 my-2 rounded-md hover:bg-red-800 font-semibold transition-all">
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Don't have Account?
          <span className="hover:underline cursor-pointer text-red-400">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
