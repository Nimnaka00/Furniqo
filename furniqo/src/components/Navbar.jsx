import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { getTokenCookie } from "../utils/utils";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m0 14.728l1.414-1.414M18.364 5.636l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const token = getTokenCookie();
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = ["Home", "Shop", "About", "Contact"];
      for (let section of sections) {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          const middle = window.innerHeight / 2;
          if (rect.top <= middle && rect.bottom >= middle) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300
              ${
                darkMode
                  ? "bg-black/00 text-white"
                  : "bg-[#D6D6D6]/90 text-[#0d1b39]"
              } border-b border-white/10 shadow-md`}
          >
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
              <motion.h1
                className="text-2xl font-bold cursor-pointer tracking-wide"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                <Link to="/">Furniqo</Link>
              </motion.h1>

              <ul className="hidden md:flex gap-8 font-medium relative">
                {["Home", "Shop", "About", "Contact"].map((label) => (
                  <motion.li
                    key={label}
                    className="relative cursor-pointer px-1"
                    onClick={() => {
                      setActiveSection(label);
                      if (label === "Home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const el = document.getElementById(label.toLowerCase());
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span
                      className={`transition-colors duration-200 ${
                        activeSection === label
                          ? "text-[#b5712d]"
                          : "hover:text-[#b5712d]"
                      }`}
                    >
                      {label}
                    </span>
                    {activeSection === label && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#b5712d] rounded"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                {/* Theme Switch */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-9 h-9 flex items-center justify-center border rounded-full transition ${
                    darkMode
                      ? "border-white text-white"
                      : "border-[#1e1e1e] text-[#1e1e1e]"
                  } hover:bg-white/10`}
                >
                  {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>

                {isLoggedIn ? (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={handleProfileClick}
                    className={`w-9 h-9 flex items-center justify-center rounded-full border shadow-md transition ${
                      darkMode
                        ? " text-white border-white"
                        : " text-[#1e1e1e] border-[#0d1b39]"
                    }`}
                  >
                    <FiUser className="text-[18px]" />
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      to="/login"
                      className={`px-4 py-2 rounded-full transition-all border text-sm ${
                        darkMode
                          ? "border-white text-white hover:bg-white hover:text-black"
                          : "border-[#0d1b39] text-[#0d1b39] hover:bg-[#0d1b39] hover:text-white"
                      }`}
                    >
                      Login
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#b5712d] z-[60]"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </>
  );
};

export default Navbar;
