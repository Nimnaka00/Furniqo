const Hero = () => {
  return (
    <section
      className="relative h-[1084px] bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/main-background.png')",
      }}
    >
      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-[#ffffff] to-transparent z-10" />

      {/* Content */}
      <div className="z-20 text-center">
        {/* Title */}
        <h1 className="absolute top-[100px] left-[250px]  text-[80px] font-extrabold leading-tight text-[#b5712d] ">
          Make Your Interior More <br /> Minimalistic & Modern
        </h1>

        {/* Subtitle */}
        <p className="absolute top-[300px] left-1/2 -translate-x-1/2 text-white mt-6 text-[24px] max-w-3xl mx-auto">
          Turn your room with Furniqo into a lot more minimalist and modern with ease and speed
        </p>

        {/* Searchbar */}
        <div className="absolute top-[400px] left-1/2 -translate-x-1/2 mt-10 flex items-center justify-center">
          <div
            className="flex items-center w-[344px] h-[56px] px-4 backdrop-blur-sm bg-white/15 border border-white/60 rounded-full"
            style={{ borderWidth: "0.86px" }}
          >
            <input
              type="text"
              placeholder="Search furniture"
              className="bg-transparent flex-grow text-white placeholder-white text-[18px] focus:outline-none"
            />
            <button className="w-10 h-10 bg-[#b5712d] rounded-full flex items-center justify-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
