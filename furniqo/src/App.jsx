import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminHome from "./components/admin/AdminHome.jsx";
import AdminUserManagement from "./components/admin/AdminUserManagement.jsx";
import AdminDesign from "./components/admin/AdminDesign.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<AdminUserManagement />} /> {/* ✅ ADD THIS */}
          <Route path="designs" element={<AdminDesign />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
