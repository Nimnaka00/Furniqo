import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getTokenCookie, clearTokenCookie } from "../utils/utils"; // ✅ cookie helpers

const Profile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  // Fetch user profile
  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`, // ✅ using cookie
        },
      });
      setUserData({ ...res.data, password: "********" });
    } catch (err) {
      console.error("Failed to fetch profile", err);
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    clearTokenCookie(); // ✅ clear cookie
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:5000/api/auth/update", userData, {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`, // ✅ using cookie
        },
      });
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div
      className="w-full h-screen flex"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {/* Sidebar */}
      <div className="w-[300px] bg-white rounded-r-[50px] flex flex-col justify-between py-10 px-6 shadow-lg">
        <div>
          <div className="flex items-center gap-3">
            <img src="/assets/User.png" alt="User" className="w-10 h-10" />
            <span className="text-gray-800 font-semibold text-lg">{userData.name}</span>
          </div>
          <div className="mt-10">
            <button className="w-full flex items-center gap-2 text-white font-medium text-lg bg-[#B5712D] px-4 py-3 rounded-md">
              👤 Personal Data
            </button>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-fit bg-[#0D1B39] text-white px-6 py-2 rounded-full flex items-center gap-2 self-start"
        >
          ↩ Logout
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex items-center justify-center px-10">
        <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md p-10 rounded-2xl text-white shadow-md">
          <h2 className="text-lg font-semibold mb-6">Identification</h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full bg-white text-black px-4 py-3 rounded-md"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full bg-white text-black px-4 py-3 rounded-md"
            />

            {/* Password */}
            <input
              type={editMode ? "text" : "password"}
              name="password"
              value={userData.password}
              onChange={handleChange}
              disabled={!editMode}
              className="col-span-2 bg-white text-black px-4 py-3 rounded-md"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={() => setEditMode(true)}
              className="bg-[#0D1B39] text-white px-6 py-2 rounded-full w-[100px]"
            >
              Edit
            </button>
            <button
              onClick={handleSave}
              className="bg-[#0D1B39] text-white px-6 py-2 rounded-full w-[100px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
