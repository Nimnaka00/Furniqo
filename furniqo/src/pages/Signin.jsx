import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setTokenCookie } from "../utils/utils";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // ✅ added motion!

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      const { token, user } = res.data;

      setTokenCookie(token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.email === "admin.furniqo2025@gmail.com") {
        toast.success("Welcome back, Admin!");
        setTimeout(() => navigate("/admin"), 1500);
      } else {
        toast.success(`Welcome back, ${user.name || "User"}!`);
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/main-background.png')`,
      }}
    >
      {/* Logo */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[30px] left-[100px] text-white text-[28px] font-bold"
      >
        Furniqo
      </motion.h2>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[120px] left-[190px] text-[#B5712D] text-[64px] font-extrabold leading-tight drop-shadow-md"
      >
        Sign In To Your <br /> Account
      </motion.h1>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-md w-full bg-[#FBFBFB]/50 backdrop-blur-md rounded-xl p-8 shadow-lg z-10 absolute top-[300px]"
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 px-4 py-2 text-[16px]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 px-4 py-2 text-[16px]"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Show Password */}
          <div className="flex items-center text-[16px]">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label htmlFor="showPassword">Show password</label>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0D1B39] text-white py-2 text-[16px] font-medium transition rounded-full"
              style={{
                width: "345px",
                borderRadius: "32px",
              }}
            >
              Sign in
            </motion.button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-[16px] text-gray-700">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium text-[#0D1B39] underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signin;
