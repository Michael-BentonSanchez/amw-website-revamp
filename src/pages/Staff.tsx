import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import leoimg from "../assets/leo_amw_staff.png";
import ireacaimg from "../assets/ireaca_amw_staff.jpg";
import samimg from "../assets/sam_amw_staff.png";
import kimimg from "../assets/kim_amw_staff.jpg";
import nickimg from "../assets/nick_amw_staff.png";

const team = [
  {
    name: "Leo Andrades",
    role: "President",
    email: "leo@amwllc.net",
    image: leoimg,
  },
  {
    name: "Ireaca Bernard",
    role: "Community Agent",
    email: "ireaca.bernard@amwllc.net",
    phone: "(910) 778-1184",
    image: ireacaimg,
  },
  {
    name: "Sam Evans",
    role: "Operations Manager",
    email: "sam@amwllc.net",
    phone: "(910) 465-5385",
    image: samimg,
  },
  {
    name: "Kim Hampton",
    role: "Community Manager",
    email: "kim@amwllc.net",
    image: kimimg,
  },
  {
    name: "Nick Joseph",
    role: "Founder & Advisory Board Member",
    email: "nick@amwllc.net",
    image: nickimg,
  },
];

const Staff = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-20 border-l-4 border-blue-700 pl-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-blue-700 font-bold mb-2">
            The Experts
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Get to Know the Team at <br />
            <span className="text-blue-700">
              Association Management of Wilmington
            </span>
          </h1>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl leading-relaxed">
            Our dedicated professionals work tirelessly to deliver exceptional
            service and support to every community we serve.
          </p>
        </div>

        {/* --- STAFF GRID --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden bg-slate-200 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${member.name === "Leo Andrades" ? "object-top" : ""}`}
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
                  {member.role}
                </p>

                {/* Contact Links */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                  {member.phone && (
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Staff;
