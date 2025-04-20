import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTokenCookie } from "../utils/utils"; // ✅ get token from cookie

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const token = getTokenCookie(); // ✅ using cookie now
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav
      className={`bg-transparent fixed w-full top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          <Link to="/">Furniqo</Link>
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium">
            <li className="cursor-pointer hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </li>
            <li className="cursor-pointer hover:underline" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: "smooth" })}>
              Shop
            </li>
            <li className="cursor-pointer hover:underline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: "smooth" })}>
              About
            </li>
            <li className="cursor-pointer hover:underline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </li>
        </ul>

        {isLoggedIn ? (
          <img
            src="/assets/User.png"
            alt="User Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
        ) : (
          <Link
            to="/login"
            className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0D1B39] transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
