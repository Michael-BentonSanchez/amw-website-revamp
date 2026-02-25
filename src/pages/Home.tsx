import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import heroimg from "../assets/beach.jpg";
import condo1 from "../assets/condo-pic-1.jpg";
import condo2 from "../assets/condo-pic-2.jpg";
import condo3 from "../assets/condo-pic-3.jpg";
import Services from "../components/Services";

const Home = () => {
  // 1. Modern Slider Config (No dots, just smooth fades)
  const [sliderRef] = useKeenSlider({
    loop: true,
    initial: 0,
    created(s) {
      setInterval(() => s.next(), 4000);
    },
  });

  return (
    <div className="bg-white text-slate-900">
      {/* --- HERO: THE COASTAL FIRST IMPRESSION --- */}
      <section className="relative h-[90vh] flex flex-col lg:flex-row items-stretch overflow-hidden">
        <div className="w-full lg:w-3/5 relative">
          <img
            src={heroimg}
            alt="Wilmington Beach"
            className="h-full w-full object-cover"
          />
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        <div className="w-full lg:w-2/5 bg-slate-50 flex items-center p-12 lg:p-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Coastal Management{" "}
              <span className="text-blue-600">Redefined.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Serving Wilmington's premier communities with 25 years of local
              expertise and a focus on peaceful community living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT: BENTO GRID STYLE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: The "Community Gallery" Slider */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <div ref={sliderRef} className="keen-slider h-full">
              <div className="keen-slider__slide">
                <img
                  src={condo1}
                  className="w-full h-full object-cover"
                  alt="Condo 1"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src={condo2}
                  className="w-full h-full object-cover"
                  alt="Condo 2"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src={condo3}
                  className="w-full h-full object-cover"
                  alt="Condo 3"
                />
              </div>
            </div>
            {/* Absolute badge for "Experience" */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg">
              <p className="text-blue-600 font-bold text-3xl">25</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Years Local
              </p>
            </div>
          </motion.div>

          {/* Right: Modern Typography */}
          <div>
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              About the Company
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              Experience Matters in Wilmington
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              With over 25 years in HOA management and 50+ years of combined
              real estate experience, we don't just manage buildings—we protect
              your community's legacy.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-2xl">500+</p>
                <p className="text-slate-500 text-sm">Doors Managed</p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-2xl">Wilmington</p>
                <p className="text-slate-500 text-sm">Locally Owned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services></Services>

      {/* --- CALL TO ACTION: MINIMALIST --- */}
      <section className="bg-blue-600 py-20 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Get In Contact
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Curious if Association Management of Wilmington is the right fit for
          your community? Have questions? We'd love to hear from you - reach out
          to us!
        </p>
        <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
