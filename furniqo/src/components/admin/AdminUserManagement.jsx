import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { getTokenCookie } from "../../utils/utils";
import { motion } from "framer-motion";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${id}`, {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      });

      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-[48px] font-extrabold text-[#B5712D] mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Manage Users and Accounts
      </motion.h1>

      <motion.p
        className="text-[24px] font-normal mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        View, edit, or remove registered users to keep the platform organized.
      </motion.p>

      {/* Table Wrapper Animation */}
      <motion.div
        className="bg-white/60 backdrop-blur-md rounded-xl p-6 w-full max-w-4xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-lg text-[#0D1B39] font-semibold mb-4">
          Users
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-600">No users found.</p>
        ) : (
          <table className="w-full text-left text-gray-800">
            <thead className="border-b border-gray-300 text-sm">
              <tr>
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <motion.tr
                  key={user._id}
                  className="border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <td className="py-2">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role || "user"}</td>
                  <td className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete user"
                    >
                      <FaTrash />
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </motion.div>
    </div>
  );
};

export default AdminUserManagement;
