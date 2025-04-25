import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "./StatCard";
import { getTokenCookie } from "../../utils/utils";
import { motion } from "framer-motion";

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

  const statCards = [
    {
      icon: <img src="/assets/icon/totcustomer.png" className="w-12 h-12" />,
      label: "Total Customers",
      value: stats.totalUsers,
    },
    {
      icon: <img src="/assets/icon/actmember.png" className="w-12 h-12" />,
      label: "Active Members",
      value: stats.activeMembers,
    },
    {
      icon: <img src="/assets/icon/totdesign.png" className="w-12 h-12" />,
      label: "Total Designs",
      value: stats.totalDesigns,
    }
  ];

  return (
    <div className="text-white">
      {/* Title */}
      <motion.h1
        className="text-[48px] font-extrabold text-[#b5712d]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome To Furniqo
      </motion.h1>

      {/* Message */}
      <motion.p
        className="text-[24px] font-normal mt-4 max-w-4xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Manage Users, Access Customer Designs, And Assist With Real-Time Room Planning — 
        All From One Place. Use The Tools Below To Load Saved Layouts, Explore Design Progress, 
        And Deliver Exceptional In-Store Support.
      </motion.p>

      {/* Stats Section */}
      <div className="mt-10">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md flex gap-12 items-center w-fit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {statCards.map((card, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <StatCard icon={card.icon} label={card.label} value={card.value} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminHome;
