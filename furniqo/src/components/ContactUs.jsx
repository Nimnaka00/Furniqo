const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-[800px] bg-white px-16 flex items-center justify-between"
    >
      {/* Left - Image Collage */}
      <div className="absolute left-0 relative w-[560px] h-[500px]">
        {/* Middle image in the back */}
        <img
          src="/assets/contactus1.png"
          alt="Main"
          className="absolute left-[95px] top-0 w-[370px] h-[476px] object-cover rounded-[20px] shadow-xl z-10"
        />

        {/* Left image in front */}
        <img
          src="/assets/contactus2.png"
          alt="Left"
          className="absolute left-0 top-[180px] w-[182.81px] h-[235.18px] object-cover rounded-[16px] shadow-2xl z-20"
        />

        {/* Right image in front */}
        <img
          src="/assets/contactus3.png"
          alt="Right"
          className="absolute left-[390px] top-[180px] w-[182.81px] h-[235.18px] object-cover rounded-[16px] shadow-2xl z-20"
        />
      </div>

      {/* Right - Text Section */}
      <div className="absolute left-[720px] top-1/2 -translate-y-1/2 max-w-[556px] px-6 z-30">
        <p className="text-[18px] text-[#b5712d] font-bold tracking-wider mb-3 -ml-2">
          CONTACT US
        </p>
        <h2 className="text-[42px] text-[#1e1e1e] font-normal leading-tight mb-4">
          Message Of Us
        </h2>
        <p className="text-[#6F6F6F] text-[16px] font-light mb-8 leading-relaxed">
          We're here to assist you every step of the way. Whether you have a question,
          need technical support, or simply want to share your feedback, our dedicated
          team is ready to listen and provide prompt assistance.
        </p>

        {/* Contact Info */}
        <div className="flex gap-10">
          {/* Email */}
          <div className="flex items-start gap-3">
            <img src="/assets/icon/email.png" alt="Email" className="w-6 h-6 mt-1" />
            <div>
              <p className="text-[#1E1E1E] text-[14px] font-medium mb-1">Email</p>
              <p className="text-[#6F6F6F] text-[14px]">info@furniqo.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <img src="/assets/icon/call.png" alt="Phone" className="w-6 h-6 mt-1" />
            <div>
              <p className="text-[#1E1E1E] text-[14px] font-medium mb-1">Phone</p>
              <p className="text-[#6F6F6F] text-[14px]">+94 74 100 1000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
