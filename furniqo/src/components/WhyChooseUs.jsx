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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">
            Why Choosing Us
          </h2>
  
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 text-primary font-medium cursor-pointer hover:underline">
                  More Info →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  