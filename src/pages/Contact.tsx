import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    association: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual environment variables/keys
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY",
      );
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        association: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "w-full p-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all";
  const labelStyles = "block text-sm font-semibold text-slate-700 mb-1";

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- HEADER --- */}
        {/* <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Connect With Us
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Wondering if Association Management of Wilmington is for you? Fill
            out the form below or reach out to our team directly.
          </p>
        </div> */}
        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-16 border-l-4 border-blue-700 pl-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-blue-700 font-bold mb-2">
            Contact Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Connect With Our <br />
            <span className="text-blue-700">Wilmington Team</span>
          </h1>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl leading-relaxed">
            Fill out the form below or reach out to our team directly.
          </p>
        </div>

        {/* --- FORM SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-24"
        >
          <form onSubmit={submitForm} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="association" className={labelStyles}>
                  Association or Organization Name *
                </label>
                <input
                  type="text"
                  id="association"
                  required
                  value={formData.association}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="firstName" className={labelStyles}>
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelStyles}>
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelStyles}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelStyles}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelStyles}>
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputStyles} resize-none`}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-700 text-white px-12 py-4 rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-95 disabled:bg-slate-300"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>

        {/* --- CONTACT INFO & MAPS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Offices */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold border-b border-slate-100 pb-4">
              Our Offices
            </h2>

            {[
              {
                name: "Cape Cottages",
                addr: "825 Lennon Drive, Wilmington, NC 28405",
              },
            ].map((office, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-blue-700 font-bold text-xl mb-2">
                    {office.name}
                  </h3>
                  <div className="flex items-start gap-2 text-slate-600 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                    <p className="text-sm">{office.addr}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                    <p className="text-sm">9am — 5pm</p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648.9096003708412!2d-77.87629525!3d34.2531568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f4d1561786dd%3A0xe911d9c9d5197c55!2s825%20Lennon%20Dr%2C%20Wilmington%2C%20NC%2028405!5e0!3m2!1sen!2sus!4v1742838303165!5m2!1sen!2sus"
                  className="w-full md:w-40 h-40 rounded-xl"
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold border-b border-slate-100 pb-4 mb-6">
                Direct Reach
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Telephone Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-blue-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black uppercase tracking-widest">
                      Telephone
                    </h4>
                    <p className="text-slate-900 font-semibold">
                      (910) 794-2570
                    </p>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-blue-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black uppercase tracking-widest">
                      Email
                    </h4>
                    <a
                      href="mailto:sam@amwllc.net"
                      className="text-blue-700 font-semibold hover:underline block"
                    >
                      sam@amwllc.net
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
