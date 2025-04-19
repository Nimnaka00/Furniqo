import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

      // Save token if needed
      localStorage.setItem("token", res.data.token);

      console.log("✅ Logged in:", res.data);
      navigate("/"); // or go to dashboard/home
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
      <h2 className="absolute top-[30px] left-[100px] text-white text-[28px] font-bold">
        Furniqo
      </h2>

      {/* Title */}
      <h1 className="absolute top-[120px] left-[190px] text-[#B5712D] text-[64px] font-extrabold leading-tight drop-shadow-md">
        Sign In To Your <br /> Account
      </h1>

      {/* Login Form */}
      <div className="max-w-md w-full bg-[#FBFBFB]/50 backdrop-blur-md rounded-xl p-8 shadow-lg z-10 absolute top-[300px]">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700">
              Email address
            </label>
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
            <label className="block text-[16px] font-medium text-gray-700">
              Password
            </label>
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

          {/* Sign In Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#0D1B39] text-white py-2 text-[16px] font-medium hover:opacity-90 transition"
              style={{
                width: "345px",
                borderRadius: "32px",
              }}
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-[16px] text-gray-700">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium text-[#0D1B39] underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
