// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useKeenSlider } from "keen-slider/react";
// import emailjs from "@emailjs/browser";
// import {
//   Mail,
//   Phone,
//   ShieldCheck,
//   BarChart3,
//   Users,
//   ClipboardList,
//   Wrench,
//   Monitor,
//   MapPin,
//   Clock,
// } from "lucide-react";
// import "keen-slider/keen-slider.min.css";

// // Asset Imports (Assumes your Vite/React setup paths)
// import heroImg from "../assets/beach.jpg";
// import condo1 from "../assets/condo-pic-1.jpg";
// import condo2 from "../assets/condo-pic-2.jpg";
// import condo3 from "../assets/condo-pic-3.jpg";
// import leoImg from "../assets/leo_amw_staff.png";
// import ireacaImg from "../assets/ireaca_amw_staff.jpg";
// import samImg from "../assets/sam_amw_staff.png";
// import kimImg from "../assets/kim_amw_staff.jpg";
// import nickImg from "../assets/nick_amw_staff.png";

// const WilmingtonLanding = () => {
//   /* --- STATE & LOGIC --- */
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     association: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // 1. About Slider
//   const [sliderRef] = useKeenSlider({
//     loop: true,
//     initial: 0,
//     created(s) {
//       setInterval(() => s.next(), 4000);
//     },
//   });

//   // 2. Form Handling
//   const handleChange = (e: any) =>
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   const submitForm = async (e: any) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       await emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY");
//       alert("Inquiry Sent Successfully");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         association: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   /* --- REUSABLE STYLES --- */
//   const sectionHeader = (sub: string, main: string) => (
//     <div className="mb-16 border-l-4 border-blue-700 pl-6">
//       <h2 className="text-sm uppercase tracking-[0.2em] text-blue-700 font-bold mb-2">
//         {sub}
//       </h2>
//       <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//         {main}
//       </h3>
//     </div>
//   );

//   return (
//     <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
//       {/* --- HERO SECTION --- */}
//       <section
//         id="home"
//         className="relative h-[95vh] flex flex-col lg:flex-row items-stretch overflow-hidden"
//       >
//         <div className="w-full lg:w-3/5 relative">
//           <img
//             src={heroImg}
//             className="h-full w-full object-cover"
//             alt="Wilmington Beach"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
//         </div>
//         <div className="w-full lg:w-2/5 bg-slate-50 flex items-center p-12 lg:p-20">
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//               Coastal Management{" "}
//               <span className="text-blue-700">Redefined.</span>
//             </h1>
//             <p className="text-xl text-slate-600 leading-relaxed mb-8">
//               We proudly serve the coastal communities of Wilmington, North
//               Carolina with a dedicated team of community management experts.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             whileInView={{ opacity: 1, scale: 1 }}
//             initial={{ opacity: 0, scale: 0.95 }}
//             viewport={{ once: true }}
//             className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-square"
//           >
//             <div ref={sliderRef} className="keen-slider h-full">
//               {[condo1, condo2, condo3].map((img, i) => (
//                 <div key={i} className="keen-slider__slide">
//                   <img
//                     src={img}
//                     className="w-full h-full object-cover"
//                     alt=""
//                   />
//                 </div>
//               ))}
//             </div>
//             {/* <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 text-center">
//               <p className="text-blue-700 font-black text-4xl">25</p>
//               <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
//                 Years Local
//               </p>
//             </div> */}
//           </motion.div>
//           <div>
//             {sectionHeader("About us", "Experience Matters in HOA Management")}
//             <p className="text-lg text-slate-600 leading-relaxed mb-10">
//               Association Management of Wilmington brings 25 years of experience
//               providing professional HOA management services in Wilmington, NC.
//               We are dedicated to maintaining well-managed, welcoming
//               communities through high standards, transparent communication, and
//               a commitment to helping neighborhoods thrive.
//             </p>
//             <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
//               <div>
//                 <p className="font-bold text-3xl">500+</p>
//                 <p className="text-slate-500 text-xs uppercase tracking-widest">
//                   Doors Managed
//                 </p>
//               </div>
//               <div>
//                 <p className="font-bold text-3xl">25+</p>
//                 <p className="text-slate-500 text-xs uppercase tracking-widest">
//                   Years Experience
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES SECTION --- */}
//       <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
//         <div className="max-w-7xl mx-auto px-6">
//           {sectionHeader(
//             "Our Expertise",
//             "Professional Solutions for Coastal Associations",
//           )}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Financial Stewardship",
//                 icon: <BarChart3 />,
//                 desc: "Transparent accounting and effortless dues collection through our integrated portals.",
//               },
//               {
//                 title: "Infrastructure Oversight",
//                 icon: <ShieldCheck className="w-6 h-6" />,
//                 desc: "Routine site inspections and long-term maintenance planning to ensure your property's physical assets are preserved.",
//               },
//               {
//                 title: "Board Advisory",
//                 icon: <Users />,
//                 desc: "Meeting coordination and clear communication to keep your association running smoothly.",
//               },
//               {
//                 title: "Vendor Management",
//                 icon: <Wrench className="w-6 h-6" />,
//                 desc: "Leveraging our vetted network of local contractors to ensure quality work and competitive pricing.",
//               },
//               {
//                 title: "Covenant Enforcement",
//                 icon: <ClipboardList />,
//                 desc: "Professional oversight of governing documents to maintain community standards and neighborhood harmony.",
//               },
//               {
//                 title: "Digital Solutions",
//                 icon: <Monitor className="w-6 h-6" />,
//                 desc: "Rule enforcement, legal compliance, and modern portal integration via Buildium platform.",
//               },
//             ].map((s, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -12, transition: { duration: 0.2 } }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="group p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all"
//               >
//                 <div className="mb-6 p-4 rounded-2xl bg-slate-50 text-blue-700 w-fit group-hover:bg-blue-700 group-hover:text-white transition-colors">
//                   {s.icon}
//                 </div>
//                 <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
//                 <p className="text-slate-600 leading-relaxed">{s.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- STAFF SECTION --- */}
//       <section id="staff" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
//         {sectionHeader("The Team", "The Experts Behind Your Community")}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {[
//             {
//               name: "Leo Andrades",
//               role: "President",
//               email: "leo@amwllc.net",
//               img: leoImg,
//             },
//             {
//               name: "Ireaca Bernard",
//               role: "Community Agent",
//               email: "ireaca.bernard@amwllc.net",
//               img: ireacaImg,
//             },
//             {
//               name: "Sam Evans",
//               role: "Operations Manager",
//               email: "sam@amwllc.net",
//               img: samImg,
//             },
//             {
//               name: "Kim Hampton",
//               role: "Community Agent",
//               email: "kim@amwllc.net",
//               img: kimImg,
//             },
//             {
//               name: "Nick Joseph",
//               role: "Founder & Advisory Board Member",
//               email: "nick@amwllc.net",
//               img: nickImg,
//             },
//           ].map((m, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
//             >
//               <div className="aspect-[4/5] overflow-hidden bg-slate-200">
//                 <img
//                   src={m.img}
//                   className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${m.name === "Leo Andrades" ? "object-top" : ""}`}
//                   alt={m.name}
//                 />
//               </div>
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold mb-1">{m.name}</h3>
//                 <p className="text-blue-700 font-bold text-[10px] uppercase tracking-widest mb-6">
//                   {m.role}
//                 </p>
//                 <a
//                   href={`mailto:${m.email}`}
//                   className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-700 transition-colors"
//                 >
//                   <Mail className="w-4 h-4" /> {m.email}
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <section id="contact" className="py-24 bg-slate-50 scroll-mt-20">
//         {/* Unified max-w-7xl container to match Services and Staff */}
//         <div className="max-w-7xl mx-auto px-6">
//           {sectionHeader("Connect", "Start the Conversation with AMW")}

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Form Block */}
//             <motion.form
//               onSubmit={submitForm}
//               className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 space-y-6"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="md:col-span-2">
//                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
//                     Association Name*
//                   </label>
//                   <input
//                     id="association"
//                     required
//                     value={formData.association}
//                     onChange={handleChange}
//                     className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
//                     First Name*
//                   </label>
//                   <input
//                     id="firstName"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
//                     Last Name*
//                   </label>
//                   <input
//                     id="lastName"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 transition-all"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
//                   Message*
//                 </label>
//                 <textarea
//                   id="message"
//                   required
//                   rows={5}
//                   placeholder="How can we help your community?"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full p-4 bg-slate-50 rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-100 transition-all"
//                 />
//               </div>

//               <button
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-700 text-white p-5 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98] disabled:bg-slate-300 hover:cursor-pointer"
//               >
//                 {isSubmitting ? "Sending..." : "Submit"}
//               </button>
//             </motion.form>

//             {/* Info Cards Block */}
//             <div className="space-y-8">
//               <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-center">
//                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
//                   <Phone className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
//                     Call Us
//                   </h4>
//                   <p className="text-xl font-bold text-slate-900">
//                     (910) 794-2570
//                   </p>
//                 </div>
//               </div>

//               <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-center">
//                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
//                   <Mail className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
//                     Email General
//                   </h4>
//                   <a
//                     href="mailto:sam@amwllc.net"
//                     className="text-xl font-bold text-blue-700 hover:underline"
//                   >
//                     sam@amwllc.net
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- OFFICES SECTION --- */}
//       <section id="offices" className="py-24 bg-white scroll-mt-20">
//         <div className="max-w-7xl mx-auto px-6">
//           {sectionHeader("Our Locations", "Visit Our Wilmington Offices")}

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {[
//               {
//                 name: "Cape Cottages",
//                 address: "825 Lennon Drive, Wilmington, NC 28405",
//                 hours: "9am — 5pm",
//                 mapUrl:
//                   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648.9096003708412!2d-77.87629525!3d34.2531568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f4d1561786dd%3A0xe911d9c9d5197c55!2s825%20Lennon%20Dr%2C%20Wilmington%2C%20NC%2028405!5e0!3m2!1sen!2sus!4v1742838303165!5m2!1sen!2sus",
//               },
//               {
//                 name: "Hunters Crossing",
//                 address: "5014 Hunters Trail, Wilmington, NC 28405",
//                 hours: "9am — 5pm",
//                 mapUrl:
//                   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.8026479713712!2d-77.88214867427493!3d34.25357912308178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f4d66bec9f4b%3A0x727ecd96c6b757ad!2sHunters%20Crossing%20Apartments!5e0!3m2!1sen!2sus!4v1742838535775!5m2!1sen!2sus",
//               },
//             ].map((office, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="group flex flex-col md:flex-row gap-8 p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm transition-all hover:shadow-xl"
//               >
//                 {/* Map Container */}
//                 <div className="w-full md:w-64 h-64 shrink-0 overflow-hidden rounded-3xl border border-slate-200">
//                   <iframe
//                     src={office.mapUrl}
//                     className="w-full h-full hover:grayscale-0 transition-all duration-500"
//                     loading="lazy"
//                     title={`${office.name} map`}
//                   ></iframe>
//                 </div>

//                 {/* Info Block */}
//                 <div className="flex flex-col justify-center">
//                   <h4 className="text-2xl font-bold text-slate-900 mb-4">
//                     {office.name}
//                   </h4>
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3 text-slate-600">
//                       <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-1" />
//                       <p className="text-sm leading-relaxed">
//                         {office.address}
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-3 text-slate-600">
//                       <Clock className="w-5 h-5 text-blue-700 shrink-0" />
//                       <p className="text-sm">{office.hours}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="py-12 bg-slate-50 text-center text-black text-xs font-medium uppercase tracking-[0.2em]">
//         © {new Date().getFullYear()} Association Management of Wilmington
//       </footer>
//     </div>
//   );
// };

// export default WilmingtonLanding;

import { useState } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  ShieldCheck,
  BarChart3,
  Users,
  ClipboardList,
  Wrench,
  Monitor,
  MapPin,
  Clock,
} from "lucide-react";
import "keen-slider/keen-slider.min.css";

// Asset Imports
import heroImg from "../assets/beach.jpg";
import condo1 from "../assets/condo-pic-1.jpg";
import condo2 from "../assets/condo-pic-2.jpg";
import condo3 from "../assets/condo-pic-3.jpg";
import leoImg from "../assets/leo_amw_staff.png";
import ireacaImg from "../assets/ireaca_amw_staff.jpg";
import samImg from "../assets/sam_amw_staff.png";
import kimImg from "../assets/kim_amw_staff.jpg";
import nickImg from "../assets/nick_amw_staff.png";

const WilmingtonLanding = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    association: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [sliderRef] = useKeenSlider({
    loop: true,
    initial: 0,
    created(s) {
      setInterval(() => s.next(), 4000);
    },
  });

  const handleChange = (e: any) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const submitForm = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY");
      alert("Inquiry Sent Successfully");
      setFormData({
        firstName: "",
        lastName: "",
        association: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionHeader = (sub: string, main: string) => (
    <div className="mb-10 md:mb-16 border-l-4 border-blue-700 pl-4 md:pl-6">
      <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-700 font-bold mb-2">
        {sub}
      </h2>
      <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
        {main}
      </h3>
    </div>
  );

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative min-h-[70vh] lg:min-h-[90vh] flex flex-col md:flex-row items-stretch overflow-hidden"
      >
        {/* Image: Now splits at 'md' (768px) instead of 'lg' */}
        <div className="w-full md:w-1/2 lg:w-3/5 relative h-[45vh] md:h-auto">
          <img
            src={heroImg}
            className="h-full w-full object-cover"
            alt="Wilmington Beach"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Text Content: Now side-by-side at 912px (Surface Pro size) */}
        <div className="w-full md:w-1/2 lg:w-2/5 bg-slate-50 flex items-center p-8 sm:p-12 lg:p-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Coastal Management{" "}
              <span className="text-blue-700">Redefined</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              We proudly serve the coastal communities of Wilmington, North
              Carolina with a dedicated team of community management experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="py-16 md:py-24 px-6 max-w-7xl mx-auto scroll-mt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl aspect-square"
          >
            <div ref={sliderRef} className="keen-slider h-full">
              {[condo1, condo2, condo3].map((img, i) => (
                <div key={i} className="keen-slider__slide">
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="Property Gallery"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          <div>
            {sectionHeader("About us", "Experience Matters in HOA Management")}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10">
              Association Management of Wilmington brings 25 years of experience
              providing professional HOA management services in Wilmington, NC.
              We are dedicated to maintaining well-managed, welcoming
              communities through high standards, transparent communication, and
              a commitment to helping neighborhoods thrive.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="font-bold text-2xl md:text-3xl text-slate-900">
                  500+
                </p>
                <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest">
                  Doors Managed
                </p>
              </div>
              <div>
                <p className="font-bold text-2xl md:text-3xl text-slate-900">
                  25+
                </p>
                <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section
        id="services"
        className="py-16 md:py-24 bg-slate-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          {sectionHeader(
            "Our Expertise",
            "Professional Solutions for Coastal Associations",
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Financials",
                icon: <BarChart3 />,
                desc: "Transparent accounting and effortless dues collection through our integrated portals.",
              },
              {
                title: "Infrastructure Oversight",
                icon: <ShieldCheck className="w-6 h-6" />,
                desc: "Routine site inspections and long-term maintenance planning to ensure your property's physical assets are preserved.",
              },
              {
                title: "Board Advisory",
                icon: <Users />,
                desc: "Meeting coordination and clear communication to keep your association running smoothly.",
              },
              {
                title: "Vendor Management",
                icon: <Wrench className="w-6 h-6" />,
                desc: "Leveraging our vetted network of local contractors to ensure quality work and competitive pricing.",
              },
              {
                title: "Covenant Enforcement",
                icon: <ClipboardList />,
                desc: "Professional oversight of governing documents to maintain community standards and neighborhood harmony.",
              },
              {
                title: "Digital Solutions",
                icon: <Monitor className="w-6 h-6" />,
                desc: "Modern portal via the Buildium platform for real-time community management.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="group p-6 md:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all transform-gpu"
              >
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 text-blue-700 w-fit group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4">
                  {s.title}
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STAFF SECTION --- */}
      <section
        id="staff"
        className="py-16 md:py-24 max-w-7xl mx-auto px-6 scroll-mt-20"
      >
        {sectionHeader("The Team", "The Experts Behind Your Community")}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              name: "Leo Andrades",
              role: "President",
              email: "leo@amwllc.net",
              img: leoImg,
            },
            {
              name: "Ireaca Bernard",
              role: "Community Agent",
              email: "ireaca.bernard@amwllc.net",
              img: ireacaImg,
            },
            {
              name: "Sam Evans",
              role: "Operations Manager",
              email: "sam@amwllc.net",
              img: samImg,
            },
            {
              name: "Kim Hampton",
              role: "Community Agent",
              email: "kim@amwllc.net",
              img: kimImg,
            },
            {
              name: "Nick Joseph",
              role: "Founder & Advisory Board",
              email: "nick@amwllc.net",
              img: nickImg,
            },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                <img
                  src={m.img}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${m.name === "Leo Andrades" ? "object-top" : ""}`}
                  alt={m.name}
                />
              </div>
              <div className="p-6 md:p-8 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{m.name}</h3>
                <p className="text-blue-700 font-bold text-[10px] uppercase tracking-widest mb-6">
                  {m.role}
                </p>
                <a
                  href={`mailto:${m.email}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" /> {m.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          {sectionHeader("Connect", "Start the Conversation with AMW")}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <motion.form
              onSubmit={submitForm}
              className="bg-white p-6 sm:p-10 rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                    Association Name*
                  </label>
                  <input
                    id="association"
                    required
                    value={formData.association}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                  Message*
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="How can we help your community?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                />
              </div>
              <button
                disabled={isSubmitting}
                className="w-full bg-blue-700 text-white p-5 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98] disabled:bg-slate-300 hover:cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </motion.form>

            <div className="space-y-6">
              <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Call Us
                  </h4>
                  <p className="text-lg md:text-xl font-bold text-slate-900">
                    (910) 794-2570
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:sam@amwllc.net"
                    className="text-lg md:text-xl font-bold text-blue-700 hover:underline"
                  >
                    sam@amwllc.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OFFICES SECTION --- */}
      <section id="offices" className="py-20 md:py-29 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          {sectionHeader("Our Locations", "Visit Our Wilmington Offices")}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {[
              {
                name: "Cape Cottages",
                address: "825 Lennon Drive, Wilmington, NC 28405",
                hours: "9am — 5pm",
                mapUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648.9096003708412!2d-77.87629525!3d34.2531568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f4d1561786dd%3A0xe911d9c9d5197c55!2s825%20Lennon%20Dr%2C%20Wilmington%2C%20NC%2028405!5e0!3m2!1sen!2sus!4v1742838303165!5m2!1sen!2sus",
              },
              {
                name: "Hunters Crossing",
                address: "5014 Hunters Trail, Wilmington, NC 28405",
                hours: "9am — 5pm",
                mapUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.8026479713712!2d-77.88214867427493!3d34.25357912308178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f4d66bec9f4b%3A0x727ecd96c6b757ad!2sHunters%20Crossing%20Apartments!5e0!3m2!1sen!2sus!4v1742838535775!5m2!1sen!2sus",
              },
            ].map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 bg-slate-50 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="w-full md:w-48 lg:w-64 h-48 md:h-auto shrink-0 overflow-hidden rounded-2xl border border-slate-200">
                  <iframe
                    src={office.mapUrl}
                    className="w-full h-full transition-all duration-500"
                    loading="lazy"
                    title={`${office.name} map`}
                  ></iframe>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                    {office.name}
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-1" />
                      <p className="text-sm leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Clock className="w-5 h-5 text-blue-700 shrink-0" />
                      <p className="text-sm">{office.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-slate-50 text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Association Management of Wilmington
      </footer>
    </div>
  );
};

export default WilmingtonLanding;
