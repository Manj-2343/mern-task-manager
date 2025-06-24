import React, { useState } from "react";
import { registerUser } from "../services/authServices";
import { useAuth } from "../context/AuthProvider";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setUser } = useAuth();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await registerUser(formData);
      setUser(res.data); // Save user to context/localStorage
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
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
            <label className="font-semibold text-lg">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full my-3 px-3 py-3 outline-none rounded-md bg-gray-200 focus:ring-2 focus:ring-red-300"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-semibold text-lg">E_mail</label>
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
          Already Registered
          <span className="hover:underline cursor-pointer text-red-400">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
