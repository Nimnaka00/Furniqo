import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { clearTokenCookie } from "../../utils/utils";
import { toast } from "react-toastify";
import { AiFillHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { LuPaintbrush } from "react-icons/lu";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/admin", icon: <AiFillHome size={24} /> },
    { label: "User Management", path: "/admin/users", icon: <FiUsers size={22} /> },
    { label: "Design", path: "/admin/designs", icon: <LuPaintbrush size={22} /> },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    clearTokenCookie();
    localStorage.removeItem("user");

    toast.success("You have been logged out!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {/* Sidebar */}
      <div className="w-[375px] h-screen bg-white flex flex-col justify-between p-8 rounded-tr-[60px] shadow-md">
        <div>
          {/* Title */}
          <h1 className="text-[#B5712D] text-[64px] font-extrabold leading-none">Admin</h1>
          <p className="text-[#0D1B39] text-[24px] font-semibold mt-[-10px]">Dashboard</p>

          {/* Sidebar Nav Buttons */}
          <div className="mt-10 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-[323px] h-[62px] flex items-center gap-4 px-6 rounded-lg border text-[24px] font-medium transition
                  ${
                    isActive(item.path)
                      ? "bg-[#B5712D] text-white border-[#B5712D]"
                      : "text-[#0D1B39] border-[#8d8d8d] hover:bg-[#B5712D] hover:text-white"
                  }`}
              >
                <span className="w-6 h-6">{item.icon}</span>
                {item.label}
              </button>
            ))}
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

      {/* Dynamic Page Content */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
