import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Import your assets
import condo1 from "../assets/condo-pic-1.jpg";
import condo2 from "../assets/condo-pic-2.jpg";
import condo3 from "../assets/condo-pic-3.jpg";

const About = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    initial: 0,
    created(s) {
      setInterval(() => s.next(), 4000);
    },
  });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Interactive Gallery */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-square"
        >
          <div ref={sliderRef} className="keen-slider h-full">
            <div className="keen-slider__slide">
              <img
                src={condo1}
                className="w-full h-full object-cover"
                alt="Community 1"
              />
            </div>
            <div className="keen-slider__slide">
              <img
                src={condo2}
                className="w-full h-full object-cover"
                alt="Community 2"
              />
            </div>
            <div className="keen-slider__slide">
              <img
                src={condo3}
                className="w-full h-full object-cover"
                alt="Community 3"
              />
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
            <p className="text-blue-700 font-black text-4xl">25</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
              Years Local
            </p>
          </div>
        </motion.div>

        {/* Right: The Firm's Pedigree */}
        <div>
          <div className="mb-8 border-l-4 border-blue-700 pl-6">
            <h2 className="text-blue-700 font-bold tracking-[0.2em] uppercase text-sm mb-2">
              Our Legacy
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">
              Experience Matters in <br /> Wilmington Real Estate
            </h3>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            With 25 years in HOA management and over 50 years of combined real
            estate experience, we protect your community's property value with
            professional, hands-on stewardship.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="border-t border-slate-100 pt-6">
              <p className="font-bold text-3xl text-slate-900">500+</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Doors Managed
              </p>
            </div>
            <div className="border-t border-slate-100 pt-6">
              <p className="font-bold text-3xl text-slate-900">50+</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
