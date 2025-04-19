import { useState } from "react";

const Signup = () => {
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
        Create Your <br /> Account
      </h1>

      {/* Signup Form */}
      <div
        className="bg-[#FBFBFB]/50 backdrop-blur-md rounded-xl shadow-lg z-10 p-8 absolute top-[300px]"
        style={{
          width: "640px",
          height: "462px",
        }}
      >
        <form className="space-y-4">
          {/* Name Fields */}
          <div className="flex space-x-5">
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="Last name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[16px] font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
              style={{ width: "543px" }}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Fields */}
          <div className="flex space-x-5">
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                Confirm your password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="mt-1 rounded-md border-gray-300 px-4 py-2 text-[16px]"
                style={{ width: "259px" }}
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

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

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#0D1B39] text-white py-2 text-[16px] font-medium hover:opacity-90 transition"
              style={{
                width: "345px",
                borderRadius: "32px",
              }}
            >
              Create an account
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-[16px] text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-[#0D1B39] underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
