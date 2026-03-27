import { motion } from "motion/react";
import { ChevronDown, Phone, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1920&auto=format&fit=crop"
          alt="Modern Elevator"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-dark-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-electric-blue/20 text-electric-blue rounded-full border border-electric-blue/30">
            Premium Elevator Services
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Next-Gen Elevator <br />
            <span className="text-electric-blue">Solutions in Hyderabad</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Fast, Reliable & High-Quality Elevator Services. We bring the future of vertical transportation to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-electric-blue text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,112,243,0.4)]"
            >
              <FileText size={20} />
              Get a Quote
            </motion.a>
            <motion.a
              href="tel:09100009337"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass text-white rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-electric-blue"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Background Particles (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -100 + "px"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}
