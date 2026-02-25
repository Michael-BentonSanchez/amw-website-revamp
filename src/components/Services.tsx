import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Users } from "lucide-react";

const services = [
  {
    title: "Financial Stewardship",
    desc: "Transparent accounting and effortless dues collection through our integrated portals.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Asset Preservation",
    desc: "Proactive inspections and a vetted network of local vendors to protect your community's long-term value.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Board Advisory",
    desc: "Meeting coordination and clear communication to keep your association's governance running smoothly.",
    icon: <Users className="w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 border-l-4 border-blue-700 pl-6">
          <h2 className="text-blue-700 font-bold tracking-widest uppercase text-xs mb-2">
            Our Expertise
          </h2>
          <h3 className="text-4xl font-bold text-slate-900">
            Professional Solutions for <br /> Coastal Associations
          </h3>
        </div>

        {/* Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              transition={{ delay: 0, duration: 0.5 }}
              className="group relative p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Icon - Constant Blue */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 text-blue-700 w-fit group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h4>

              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Minimalist Action Link */}
              {/* <div className="flex items-center gap-2 text-sm font-bold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Details</span>
                <span className="text-lg">→</span>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
