const DesignSection = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left - Image */}
          <div>
            <img
              src="/assets/feature.png"
              alt="Design your dream space"
              className="w-full rounded-lg shadow-md"
            />
          </div>
  
          {/* Right - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Design Your Dream Space
            </h2>
            <p className="text-gray-600 mb-6">
              Plan, customize, and visualize your room layout in real-time.
              Furniqo’s interactive design tool lets you build detailed 2D floor plans
              and explore them in immersive 3D — complete with furniture placement and more.
            </p>
  
            <a
              href="http://localhost:8000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              Try it yourself
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default DesignSection;
  