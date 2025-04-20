const DesignSection = () => {
  return (
    <section className="h-[760px] bg-white relative overflow-hidden">
      {/* ABSOLUTE IMAGE ON LEFT */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[650px] h-[450px] z-10">
        {/* Optional shadow */}
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
            boxShadow: "20px 0px 30px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* ABSOLUTE TEXT BLOCK ON RIGHT */}
      <div className="absolute left-[720px] top-1/2 -translate-y-1/2 max-w-[556px] px-6 z-20">
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
      </div>
    </section>
  );
};

export default DesignSection;
