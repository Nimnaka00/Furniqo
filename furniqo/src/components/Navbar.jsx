import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTokenCookie } from "../utils/utils";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const token = getTokenCookie();
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
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
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-md"
        >
          <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-white cursor-pointer tracking-wide">
              <Link to="/">Furniqo</Link>
            </h1>

            <ul className="hidden md:flex gap-8 text-white font-medium">
              {["Home", "Shop", "About", "Contact"].map((label) => (
                <li
                  key={label}
                  className="cursor-pointer hover:text-[#b5712d] transition-colors duration-200"
                  onClick={() => {
                    if (label === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      document
                        .getElementById(label.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {label}
                </li>
              ))}
            </ul>

            {isLoggedIn ? (
              <motion.img
                src="/assets/User.png"
                alt="User Profile"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
