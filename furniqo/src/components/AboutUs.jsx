const AboutUs = () => {
  return (
    <section className="bg-white h-[800px] relative overflow-hidden" id="about">
      <div className="max-w-[1200px] mx-auto px-10 flex items-center h-full">
        {/* LEFT - TEXT BLOCK */}
        <div className="w-[520px] relative z-30">
          <p className="text-[#b5712d] text-[18px] font-bold tracking-wider mb-4 absolute -left-3">
            ABOUT FURNIQO
          </p>

          <div className="h-[24px]" />

          <h2 className="text-[42px] text-[#1e1e1e] font-normal mb-4 leading-snug">
            Welcome To Furniqo
          </h2>
          <p className="text-[#6F6F6F] text-[16px] font-light mb-8 leading-relaxed">
            Welcome to Furniqo — where creativity meets simplicity in interior design.
            Our platform empowers users to plan, visualize, and personalize living spaces
            through intuitive 2D and 3D design tools.
            <br />
            Whether you're an individual designing your dream home or a shop assistant helping
            customers explore furniture layouts in-store, Furniqo makes it easy to bring ideas
            to life. With a focus on usability, flexibility, and modern aesthetics, we provide
            the tools to create beautiful, functional spaces — no experience required.
            <br />
            At Furniqo, we believe great design should be accessible to everyone.
          </p>
        </div>
      </div>

      {/* RIGHT - IMAGE COLLAGE aligned to screen end */}
      <div className="absolute right-0 top-[160px] w-[600px] h-[500px] z-10">
        {/* Back Large Image */}
        <img
          src="/assets/aboutus1.png"
          alt="About Us 1"
          className="absolute right-0 top-[50px] w-[370px] h-[370x] object-cover rounded-[16px] shadow-xl z-10" 
        />

        {/* Top Small Image */}
        <img
          src="/assets/aboutus3.png"
          alt="About Us 3"
          className="absolute left-0 top-0 w-[182.81px] h-[235.18px] object-cover rounded-[16px] shadow-xl z-20"
        />

        {/* Bottom Small Image */}
        <img
          src="/assets/aboutus2.png"
          alt="About Us 2"
          className="absolute left-0 bottom-0 w-[182.81px] h-[235.18px] object-cover rounded-[16px] shadow-xl z-20"
        />
      </div>
    </section>
  );
};

export default AboutUs;
