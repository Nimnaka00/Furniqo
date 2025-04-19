const AboutUs = () => {
    return (
      <section className="py-20 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">About Us</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Welcome to <strong>Furniqo</strong> — where creativity meets simplicity in interior design.
            We help users and shop assistants visualize spaces in 2D and 3D, plan layouts, and furnish rooms with ease and style.
          </p>
  
          {/* Image Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/assets/aboutus1.png"
              alt="About Us 1"
              className="w-full h-64 object-cover rounded-lg shadow"
            />
            <img
              src="/assets/aboutus2.png"
              alt="About Us 2"
              className="w-full h-64 object-cover rounded-lg shadow"
            />
            <img
              src="/assets/aboutus3.png"
              alt="About Us 3"
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  