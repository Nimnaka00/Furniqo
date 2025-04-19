const ContactUs = () => {
    return (
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Need assistance or have a question? Reach out to us anytime — we’re here to help make your interior vision a reality.
          </p>
  
          {/* Contact Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/assets/contactus1.png"
              alt="Contact 1"
              className="w-full h-64 object-cover rounded-lg shadow"
            />
            <img
              src="/assets/contactus2.png"
              alt="Contact 2"
              className="w-full h-64 object-cover rounded-lg shadow"
            />
            <img
              src="/assets/contactus3.png"
              alt="Contact 3"
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  