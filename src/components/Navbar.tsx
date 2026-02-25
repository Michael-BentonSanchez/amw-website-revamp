// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ExternalLink } from "lucide-react";
// // Assuming the white logo is the base to allow for brightness-0 (black) on scroll
// import logo from "../assets/Black logo - no background.svg";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Offices", href: "#offices" },
//   { name: "Staff", href: "#staff" },
//   { name: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       const sections = navLinks.map((link) => link.href.substring(1));
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
//         isScrolled || mobileMenuOpen
//           ? "bg-white/95 backdrop-blur-md py-4 shadow-sm"
//           : "bg-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* --- LOGO --- */}
//         <a href="#home" className="flex items-center gap-4 group">
//           <img
//             src={logo}
//             alt="Association Management of Wilmington Logo"
//             className={`h-10 md:h-12 w-auto transition-all duration-300 ${
//               isScrolled || mobileMenuOpen
//                 ? "brightness-0 opacity-90"
//                 : "brightness-100"
//             }`}
//           />
//           <div className="hidden xl:flex flex-col">
//             <span
//               className={`font-bold text-lg leading-none tracking-tight transition-colors ${
//                 isScrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
//               }`}
//             >
//               Association Management
//             </span>
//             <span
//               className={`text-[10px] font-bold uppercase tracking-[0.25em] mt-1 transition-colors ${
//                 isScrolled || mobileMenuOpen ? "text-blue-700" : "text-blue-400"
//               }`}
//             >
//               of Wilmington
//             </span>
//           </div>
//         </a>

//         {/* --- DESKTOP LINKS --- */}
//         <div className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-2 ${
//                 isScrolled
//                   ? activeSection === link.href.substring(1)
//                     ? "text-blue-700"
//                     : "text-slate-500 hover:text-blue-600"
//                   : activeSection === link.href.substring(1)
//                     ? "text-blue-400"
//                     : "text-white/80 hover:text-white"
//               }`}
//             >
//               {link.name}
//               {activeSection === link.href.substring(1) && (
//                 <motion.div
//                   layoutId="nav-underline"
//                   className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                     isScrolled ? "bg-blue-700" : "bg-blue-400"
//                   }`}
//                 />
//               )}
//             </a>
//           ))}
//         </div>

//         {/* --- CTA BUTTONS & TOGGLE --- */}
//         <div className="flex items-center gap-4">
//           <a
//             href="https://signin.managebuilding.com/Resident/portal/global-login"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hidden sm:flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-800 transition-all shadow-md active:scale-95"
//           >
//             Resident Portal <ExternalLink className="w-3 h-3" />
//           </a>

//           {/* MOBILE TOGGLE: Flip color based on scroll or menu state */}
//           <button
//             className={`lg:hidden p-2 transition-colors ${
//               isScrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
//             }`}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* --- MOBILE MENU --- */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl overflow-hidden"
//           >
//             <div className="flex flex-col p-8 gap-6 text-center">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-blue-700 transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <hr className="border-slate-100" />
//               <a
//                 href="https://signin.managebuilding.com/Resident/portal/global-login"
//                 className="flex items-center justify-center gap-2 bg-blue-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px]"
//               >
//                 Resident Portal <ExternalLink className="w-4 h-4" />
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
// Using the black logo as the source
import logo from "../assets/Black logo - no background.svg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Staff", href: "#staff" },
  { name: "Contact", href: "#contact" },
  { name: "Offices", href: "#offices" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* --- LOGO --- */}
        <a href="#home" className="flex items-center gap-4 group">
          <img
            src={logo}
            alt="Association Management of Wilmington Logo"
            className={`h-10 md:h-12 w-auto transition-all duration-300

            `}
          />
          <div className="hidden xl:flex flex-col">
            <span
              className={`font-bold text-lg leading-none tracking-tight transition-colors ${
                isScrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
              }`}
            >
              Association Management
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.25em] mt-1 transition-colors ${
                isScrolled || mobileMenuOpen ? "text-blue-700" : "text-blue-400"
              }`}
            >
              of Wilmington
            </span>
          </div>
        </a>

        {/* --- DESKTOP LINKS --- */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-2 ${
                isScrolled
                  ? activeSection === link.href.substring(1)
                    ? "text-blue-700"
                    : "text-slate-500 hover:text-blue-600"
                  : activeSection === link.href.substring(1)
                    ? "text-blue-400"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="nav-underline"
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    isScrolled ? "bg-blue-700" : "bg-blue-400"
                  }`}
                />
              )}
            </a>
          ))}
        </div>

        {/* --- CTA BUTTONS & TOGGLE --- */}
        <div className="flex items-center gap-4">
          {/* Changed 'sm:flex' to 'lg:flex' to hide it on tablets/mobile */}
          <a
            href="https://signin.managebuilding.com/Resident/portal/global-login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-800 transition-all shadow-md active:scale-95"
          >
            Buildium Portal <ExternalLink className="w-3 h-3" />
          </a>

          {/* MOBILE TOGGLE */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 

            `}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-blue-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              {/* Resident Portal now correctly tucked inside the mobile menu */}
              <a
                href="https://signin.managebuilding.com/Resident/portal/global-login"
                className="flex items-center justify-center gap-2 bg-blue-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px]"
              >
                Resident Portal <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
