import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center font-bold text-xl">
                T
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none uppercase">Tesla</span>
                <span className="text-[10px] text-electric-blue font-semibold tracking-widest uppercase">Elevator & Solutions</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the way in vertical transportation solutions in Hyderabad. We provide next-gen elevator services with a focus on safety, reliability, and innovation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#0070f3" }}
                  className="text-gray-600 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Reviews", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-gray-500 hover:text-electric-blue text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Services</h4>
            <ul className="space-y-4">
              {["Installation", "Maintenance", "Repair", "Technical Support", "Custom Design"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-500 hover:text-electric-blue text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin size={18} className="text-electric-blue shrink-0" />
                <span>New Hafeezpet, Marthanda Nagar, Hyderabad, 500049</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={18} className="text-electric-blue shrink-0" />
                <span>091000 09337</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail size={18} className="text-electric-blue shrink-0" />
                <span>info@teslaelevators.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 The Tesla Elevator and Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
