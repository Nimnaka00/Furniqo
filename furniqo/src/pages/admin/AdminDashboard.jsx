import { Outlet, useNavigate, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/admin", icon: "home.png" },
    { label: "User Management", path: "/admin/users", icon: "usermanagement.png" },
    { label: "Design", path: "/admin/designs", icon: "design.png" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
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

          {/* Buttons */}
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
                <img
                  src={`/assets/icon/${item.icon}`}
                  alt={item.label}
                  className="w-6 h-6"
                />
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
