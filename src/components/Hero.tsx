import { motion } from "framer-motion";
import heroImg from "../assets/beach.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex flex-col lg:flex-row items-stretch overflow-hidden">
      {/* Left side: High-impact imagery */}
      <div className="w-full lg:w-3/5 relative">
        <img
          src={heroImg}
          alt="Wilmington Beach"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Right side: Brand Messaging */}
      <div className="w-full lg:w-2/5 bg-slate-50 flex items-center p-12 lg:p-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6 text-slate-900">
            Coastal Management <br />
            <span className="text-blue-700">Redefined.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Serving Wilmington's premier communities with 25 years of local
            expertise and a focus on peaceful community living.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-blue-800 transition-all active:scale-95"
          >
            Request a Proposal
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
