
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-lg bg-white/70 border-b border-gray-100 font-inter">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center space-x-2 font-bold text-2xl text-primary hover:opacity-80 transition-opacity">
          <span>FocusFlow</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1 rounded transition-all font-medium hover:bg-accent/10 ${
                pathname === link.path ? "text-primary font-semibold" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#get-started" className="ml-4 px-5 py-2 rounded-lg font-semibold bg-cta-gradient text-white shadow hover:scale-105 transition-transform">Get Started</Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
          <Menu className="w-6 h-6 text-primary" />
        </button>
      </div>
      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl flex flex-col space-y-2"
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded transition-all font-medium hover:bg-accent/10 ${
                pathname === link.path ? "text-primary font-semibold" : "text-gray-700"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#get-started" className="mt-2 px-5 py-2 rounded-lg font-semibold bg-cta-gradient text-white shadow hover:scale-105 transition-transform text-center" onClick={() => setMobileOpen(false)}>Get Started</Link>
        </motion.div>
      )}
    </nav>
  );
};
