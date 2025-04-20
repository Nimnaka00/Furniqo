const WhyChooseUs = () => {
  const features = [
    {
      title: "Luxury facilities",
      description:
        "The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      description:
        "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
    },
    {
      title: "Many Choices",
      description:
        "We provide many unique workspace choices so that you can choose the workspace to your liking.",
    },
  ];

  return (
    <section className="h-[406px] bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-start gap-16">
        {/* Left Side Title */}
        <div className="md:w-1/3">
          <h2 className="text-[42px] text-[#1e1e1e] font-normal leading-tight">
            Why <br /> Choosing Us
          </h2>
        </div>

        {/* Right Side Features */}
        <div className="md:w-2/3 grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-[24px] font-bold text-[#1e1e1e] mb-3">
                {feature.title}
              </h3>
              <p className="text-[16px] font-normal text-[#6F6F6F] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
