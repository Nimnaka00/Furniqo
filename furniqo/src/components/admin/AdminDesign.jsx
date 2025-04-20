const AdminDesign = () => {
    const handleRedirect = () => {
      window.open("http://localhost:8000", "_blank");
    };
  
    return (
      <div className="text-white">
        {/* Title */}
        <h1 className="text-[48px] font-extrabold text-[#B5712D] mb-4 leading-tight">
          Assist Customers With Smart <br /> Interior Design
        </h1>
  
        {/* Description */}
        <p className="text-[24px] font-normal max-w-4xl mb-10 leading-relaxed">
          Visualize, support, and personalize room layouts in real-time. As an admin, you can access and manage customer designs using Furniqo’s 2D and 3D tools. Easily load saved layouts, showcase furniture placements, and guide in-store clients through personalized interior solutions — all from one central interface.
        </p>
  
        {/* Button */}
        <button
          onClick={handleRedirect}
          className="bg-[#B5712D] hover:bg-[#a05d22] transition text-white font-medium text-[20px] px-8 py-3 rounded-[12px]"
        >
          Start Designing
        </button>
      </div>
    );
  };
  
  export default AdminDesign;
  