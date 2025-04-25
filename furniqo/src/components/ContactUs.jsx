import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.section
      id="contact"
      className="w-full h-[800px] bg-white flex items-center justify-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between w-full max-w-[1200px]">
        {/* Left - Image Collage aligned to screen left */}
        <motion.div
          className="relative w-[560px] h-[500px] ml-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/contactus1.png"
            alt="Main"
            className="absolute left-[95px] top-0 w-[370px] h-[476px] object-cover rounded-[20px] shadow-xl z-10"
          />
          <img
            src="/assets/contactus2.png"
            alt="Left"
            className="absolute left-0 top-[180px] w-[182.81px] h-[235.18px] object-cover rounded-[16px] shadow-2xl z-20"
          />
          <img
            src="/assets/contactus3.png"
            alt="Right"
            className="absolute left-[390px] top-[180px] w-[182.81px] h-[235.18px] object-cover rounded-[16px] shadow-2xl z-20"
          />
        </motion.div>

        {/* Right - Text Section */}
        <motion.div
          className="absolute left-[700px] max-w-[556px] pl-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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

          <div className="flex gap-10">
            <div className="flex items-start gap-3">
              <img src="/assets/icon/email.png" alt="Email" className="w-6 h-6 mt-1" />
              <div>
                <p className="text-[#1E1E1E] text-[14px] font-medium mb-1">Email</p>
                <p className="text-[#6F6F6F] text-[14px]">info@furniqo.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src="/assets/icon/call.png" alt="Phone" className="w-6 h-6 mt-1" />
              <div>
                <p className="text-[#1E1E1E] text-[14px] font-medium mb-1">Phone</p>
                <p className="text-[#6F6F6F] text-[14px]">+94 74 100 1000</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
