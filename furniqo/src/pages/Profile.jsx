import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getTokenCookie, clearTokenCookie } from "../utils/utils";

const Profile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
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
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {/* Sidebar Styled Like Admin */}
      <div className="w-[375px] h-screen bg-white flex flex-col justify-between p-8 rounded-tr-[60px] shadow-md">
        <div>
          <h1 className="text-[#B5712D] text-[64px] font-extrabold leading-none">User</h1>
          <p className="text-[#0D1B39] text-[24px] font-semibold mt-[-10px] ">Dashboard</p>

          {/* 👤 Display Name Under Title */}
          <div className="mt-10 mb-6">
            <span className="text-gray-800 font-semibold text-lg block">{userData.name}</span>
            <div className="w-10 h-[2px] bg-[#B5712D] mt-1 rounded"></div>
          </div>

          {/* Sidebar Button */}
          <div className="mt-4 flex flex-col gap-4">
            <button
              className="w-[323px] h-[62px] flex items-center gap-4 px-6 rounded-lg border text-[24px] font-medium text-white bg-[#B5712D] border-[#B5712D]"
            >
              <img
                src="/assets/User.png"
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
              Personal Data
            </button>
          </div>
        </div>

        {/* Logout Button */}
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
        <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md p-10 rounded-2xl text-white shadow-md">
          <h2 className="text-lg font-semibold mb-6">Identification</h2>

          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full bg-white text-black px-4 py-3 rounded-md"
            />

            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full bg-white text-black px-4 py-3 rounded-md"
            />

            <input
              type={editMode ? "text" : "password"}
              name="password"
              value={userData.password}
              onChange={handleChange}
              disabled={!editMode}
              className="col-span-2 bg-white text-black px-4 py-3 rounded-md"
            />
          </div>

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
