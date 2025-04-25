import { motion } from "framer-motion";

const DesignSection = () => {
  return (
    <motion.section
      className="h-[760px] bg-white relative overflow-hidden flex items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full flex justify-start items-center">
        {/* LEFT: IMAGE aligned to screen corner */}
        <motion.div
          className="relative w-[650px] h-[450px] ml-0 flex-shrink-0"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          {/* Shadow block */}
          <div
            className="absolute w-full h-full left-[30px] top-[30px] z-0"
            style={{
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "30px",
              backgroundColor: "#b6b6b6",
              opacity: 0.2,
            }}
          />
          <img
            src="/assets/feature.png"
            alt="Feature"
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            style={{
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "30px",
              boxShadow: "40px 40px 50px rgba(247, 247, 247, 69)",
            }}
          />
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div
          className="ml-20 max-w-[556px] px-6 z-10"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-[18px] text-[#b5712d] font-bold tracking-wider mb-3 -ml-2">
            EXPERIENCES
          </p>
          <h2 className="text-[42px] text-[#1e1e1e] font-normal leading-tight mb-4">
            Design Your Dream <br /> Space
          </h2>
          <p className="text-[#6F6F6F] text-[16px] font-light mb-8 leading-relaxed">
            Plan, customize, and visualize your room layout in real-time.
            Furniqo’s interactive design tool lets you build detailed 2D floor
            plans and explore them in immersive 3D — complete with furniture
            placement, customization, and more. Whether you’re experimenting
            from home or consulting in-store, your perfect room starts here.
          </p>
          <a
            href="http://localhost:8000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0d1b39] text-white text-[18px] font-medium rounded-full hover:bg-[#0c1934] transition"
            style={{
              height: "40px",
              width: "196px",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            Try it your self
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DesignSection;
