const Footer = () => {
    return (
      <footer className="bg-white border-t py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <h2 className="text-2xl font-bold text-primary cursor-pointer">
            Furniqo
          </h2>
  
          {/* Nav Links */}
          <ul className="flex gap-6 text-dark font-medium text-sm">
            <li className="cursor-pointer hover:text-primary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </li>
            <li className="cursor-pointer hover:text-primary" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: "smooth" })}>
              Shop
            </li>
            <li className="cursor-pointer hover:text-primary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: "smooth" })}>
              About
            </li>
            <li className="cursor-pointer hover:text-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </li>
          </ul>
  
          {/* Copyright */}
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Furniqo. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  