import { motion } from "framer-motion";

const AdminDesign = () => {
  const handleRedirect = () => {
    window.open("http://localhost:8000", "_blank");
  };

  return (
    <div className="text-white">
      {/* Title */}
      <motion.h1
        className="text-[48px] font-extrabold text-[#B5712D] mb-4 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Assist Customers With Smart <br /> Interior Design
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-[24px] font-normal max-w-4xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Visualize, support, and personalize room layouts in real-time. As an admin, you can access and manage customer designs using Furniqo’s 2D and 3D tools. Easily load saved layouts, showcase furniture placements, and guide in-store clients through personalized interior solutions — all from one central interface.
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={handleRedirect}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="bg-[#B5712D] hover:bg-[#a05d22] transition text-white font-medium text-[20px] px-8 py-3 rounded-[12px]"
      >
        Start Designing
      </motion.button>
    </div>
  );
};

export default AdminDesign;
