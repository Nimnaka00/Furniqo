const Hero = () => {
    return (
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/main-background.png')" }}
      >
        <div className="bg-black/60 p-8 rounded-lg max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
            Make Your Interior More<br />Minimalistic & Modern
          </h1>
          <p className="text-gray-100 mt-4">
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
  