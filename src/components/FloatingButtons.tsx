import { motion, useScroll, useSpring } from "motion/react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* Scroll to Top */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 bg-charcoal/80 glass text-white rounded-full shadow-lg cursor-pointer"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919100009337"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageCircle size={24} fill="currentColor" />
        </motion.a>

        {/* Call Button (Mobile Only) */}
        <motion.a
          href="tel:09100009337"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-4 bg-electric-blue text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <Phone size={24} fill="currentColor" />
        </motion.a>
      </div>
    </>
  );
}
