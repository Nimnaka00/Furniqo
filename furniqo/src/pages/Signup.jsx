import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; 
import { motion } from "framer-motion"; // ✅ import motion

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: `${firstName} ${lastName}`,
        email,
        password,
      });

      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url('/assets/main-background.png')` }}
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
        Create Your <br /> Account
      </motion.h1>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-[#FBFBFB]/50 backdrop-blur-md rounded-xl shadow-lg z-10 p-8 absolute top-[300px]"
        style={{
          width: "640px",
          height: "480px",
        }}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Names */}
          <div className="flex space-x-5">
            <div>
              <label className="block text-[16px] font-medium text-gray-700">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium text-gray-700">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="Last name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
              style={{ width: "543px" }}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Passwords */}
          <div className="flex space-x-5">
            <div>
              <label className="block text-[16px] font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium text-gray-700">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          {/* Password Info */}
          <p className="text-sm text-gray-700">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>

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

          {/* Signup Button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#0D1B39] text-white py-2 text-[16px] font-medium rounded-full"
              style={{ width: "345px", borderRadius: "32px" }}
            >
              Create an account
            </motion.button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-[16px] text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-[#0D1B39] underline">
            Sign in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
