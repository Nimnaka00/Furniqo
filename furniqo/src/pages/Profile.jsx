import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getTokenCookie, clearTokenCookie } from "../utils/utils";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [originalData, setOriginalData] = useState(null);
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${getTokenCookie()}`,
          },
        });
        setUserData({ ...res.data, password: "" }); // Don’t expose password
        setOriginalData({ ...res.data, password: "" });
      } catch (err) {
        console.error("Failed to fetch profile", err);
        navigate("/login");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    clearTokenCookie();
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:5000/api/auth/update", userData, {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      });
      setEditMode(false);
      setOriginalData(userData);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed", err);
      toast.error("❌ Failed to update profile");
    }
  };

  const handleCancel = () => {
    setUserData(originalData);
    setEditMode(false);
    setShowPassword(false);
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {/* Sidebar Styled Like Admin */}
      <div className="w-[375px] h-screen bg-white flex flex-col justify-between p-8 rounded-tr-[60px] shadow-md">
        <div>
          <h1 className="text-[#B5712D] text-[64px] font-extrabold leading-none">User</h1>
          <p className="text-[#0D1B39] text-[24px] font-semibold mt-[-10px]">Dashboard</p>

          {/* 👤 Display Name */}
          <div className="mt-10 mb-6">
            <span className="text-gray-800 font-semibold text-lg block">{userData.name}</span>
            <div className="w-10 h-[2px] bg-[#B5712D] mt-1 rounded"></div>
          </div>

          {/* Button */}
          <button className="w-[323px] h-[62px] flex items-center gap-4 px-6 rounded-lg border text-[24px] font-medium text-white bg-[#B5712D] border-[#B5712D]">
            <img src="/assets/User.png" alt="Profile" className="w-6 h-6 rounded-full" />
            Personal Data
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-[160px] h-[45px] flex items-center justify-center gap-2 bg-[#0D1B39] hover:bg-red-600 text-white text-[24px] font-medium rounded-full"
        >
          <img src="/assets/icon/logout.png" alt="Logout" className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex items-center justify-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl bg-white/20 backdrop-blur-md p-10 rounded-2xl text-white shadow-md"
        >
          <h2 className="text-lg font-semibold mb-6">Identification</h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                disabled={!editMode}
                className={`px-4 py-3 rounded-md transition-colors duration-200 ${
                  editMode
                    ? "bg-white text-black border border-gray-300"
                    : "bg-white text-gray-400 border border-gray-200"
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                disabled={!editMode}
                className={`px-4 py-3 rounded-md transition-colors duration-200 ${
                  editMode
                    ? "bg-white text-black border border-gray-300"
                    : "bg-white text-gray-400 border border-gray-200"
                }`}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col col-span-2">
              <label className="text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  disabled={!editMode}
                  placeholder={editMode ? "Enter new password" : "********"}
                  className={`w-full px-4 py-3 rounded-md pr-20 transition-colors duration-200 ${
                    editMode
                      ? "bg-white text-black border border-gray-300"
                      : "bg-white text-gray-400 border border-gray-200"
                  }`}
                />
                {editMode && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-sm text-[#0D1B39]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          {editMode ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end gap-4 mt-8"
            >
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-[#0D1B39] px-6 py-2 rounded-full w-[100px]"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#0D1B39] text-white px-6 py-2 rounded-full w-[100px]"
              >
                Save
              </button>
            </motion.div>
          ) : (
            <div className="flex justify-end mt-8">
              <button
                onClick={() => setEditMode(true)}
                className="bg-[#0D1B39] text-white px-6 py-2 rounded-full w-[100px]"
              >
                Edit
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
