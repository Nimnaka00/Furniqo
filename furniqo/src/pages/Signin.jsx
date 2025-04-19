import { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
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
