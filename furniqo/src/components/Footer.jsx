import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-[20px] font-bold text-[#1e1e1e] mb-4">Furniqo</h2>
          <p className="text-[#6F6F6F] text-sm leading-relaxed max-w-[250px]">
            The advantage of hiring a workspace with us is that gives you comfortable
            service and all-around facilities.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-[#f7931e] text-sm font-medium mb-4">Services</h3>
          <ul className="text-[#1e1e1e] text-sm space-y-2">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Column 3: Furniture */}
        <div>
          <h3 className="text-[#f7931e] text-sm font-medium mb-4">Furniture</h3>
          <ul className="text-[#1e1e1e] text-sm space-y-2">
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h3 className="text-[#f7931e] text-sm font-medium mb-4">Follow Us</h3>
          <ul className="text-[#1e1e1e] text-sm space-y-3">
            <li className="flex items-center gap-3">
              <FaFacebookF className="text-lg" />
              Facebook
            </li>
            <li className="flex items-center gap-3">
              <FaTwitter className="text-lg" />
              Twitter
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-lg" />
              Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center px-4 text-[#6F6F6F] text-sm">
        <p>Copyright © {new Date().getFullYear()} Furniqo</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-[#1e1e1e]">Terms & Conditions</span>
          <span className="cursor-pointer hover:text-[#1e1e1e]">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
