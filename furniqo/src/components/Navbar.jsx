const Navbar = () => {
    const isLoggedIn = false; // Mock login state

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Furniqo
        </h1>

        <ul className="hidden md:flex gap-8 text-dark font-medium">
          <li className="cursor-pointer hover:text-primary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
          <li className="cursor-pointer hover:text-primary" onClick={() => scrollToSection('shop')}>Shop</li>
          <li className="cursor-pointer hover:text-primary" onClick={() => scrollToSection('about')}>About Us</li>
          <li className="cursor-pointer hover:text-primary" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        {isLoggedIn ? (
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold cursor-pointer">
            U
          </div>
        ) : (
          <button
            onClick={() => window.location.href = '/login'}
            className="text-white bg-primary px-4 py-2 rounded-full hover:bg-orange-500 transition-all"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
