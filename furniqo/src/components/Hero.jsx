const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/main-background.png')" }}
    >
      {/* Fade effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#ffffff] to-transparent z-10" />

      {/* Content */}
      <div className="z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary drop-shadow">
          Make Your Interior More <br />
          Minimalistic & Modern
        </h1>
        <p className="text-gray-100 mt-4 text-lg">
          Turn your room with Furniqo into a lot more minimalist and modern with ease and speed
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search furniture"
            className="px-4 py-2 w-64 rounded-l-full border-none focus:outline-none text-dark"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-orange-600">
            🔍
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
