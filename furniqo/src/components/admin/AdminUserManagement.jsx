import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { getTokenCookie } from "../../utils/utils"; // ✅ import cookie helper

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`, // ✅ use token from cookie
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
          Authorization: `Bearer ${getTokenCookie()}`, // ✅ also use cookie token here
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
      <h1 className="text-[48px] font-extrabold text-[#B5712D] mb-2">
        Manage Users and Accounts
      </h1>
      <p className="text-[24px] font-normal mb-8">
        View, edit, or remove registered users to keep the platform organized.
      </p>

      <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 w-full max-w-4xl shadow-lg">
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
              {users.map((user) => (
                <tr key={user._id} className="border-b border-gray-200">
                  <td className="py-2">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role || "user"}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete user"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminUserManagement;
