import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "./StatCard";
import { getTokenCookie } from "../../utils/utils";

const AdminHome = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeMembers: 0,
    totalDesigns: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/dashboard-stats", {
          headers: {
            Authorization: `Bearer ${getTokenCookie()}`
          }
        });
        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="text-white">
      {/* Title */}
      <h1 className="text-[48px] font-extrabold text-[#b5712d]">Welcome To Furniqo</h1>

      {/* Message */}
      <p className="text-[24px] font-normal mt-4 max-w-4xl leading-relaxed">
        Manage Users, Access Customer Designs, And Assist With Real-Time Room Planning —
        All From One Place. Use The Tools Below To Load Saved Layouts, Explore Design Progress,
        And Deliver Exceptional In-Store Support.
      </p>

      {/* Stats Section */}
      <div className="mt-10">
        <div className="bg-white p-6 rounded-2xl shadow-md flex gap-12 items-center w-fit">
          <StatCard
            icon={<img src="/assets/icon/totcustomer.png" className="w-12 h-12" />}
            label="Total Customers"
            value={stats.totalUsers}
          />
          <StatCard
            icon={<img src="/assets/icon/actmember.png" className="w-12 h-12" />}
            label="Active Members"
            value={stats.activeMembers}
          />
          <StatCard
            icon={<img src="/assets/icon/totdesign.png" className="w-12 h-12" />}
            label="Total Designs"
            value={stats.totalDesigns}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
