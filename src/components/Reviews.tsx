import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Suresh Kumar",
    text: "Excellent service, good behaviour, good quality. The team was very professional and completed the installation on time.",
    initial: "S"
  },
  {
    name: "Rajesh Varma",
    text: "Fast service, best technical support. I called them for an emergency repair and they arrived within 30 minutes.",
    initial: "R"
  },
  {
    name: "Anitha Reddy",
    text: "Work quality is best. Highly recommended for any elevator related solutions in Hyderabad. Very satisfied with the maintenance plan.",
    initial: "A"
  },
  {
    name: "Mohammed Ali",
    text: "Very reliable and tech-savvy team. They installed a custom glass elevator in our villa and it looks stunning.",
    initial: "M"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-charcoal/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-electric-blue font-bold tracking-widest uppercase text-xs mb-4 block"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Trusted by <span className="text-electric-blue">Local Customers</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
            <div className="text-2xl font-bold">5.0 <span className="text-sm font-normal text-gray-500">(74 Reviews)</span></div>
            <div className="flex items-center gap-2 mt-2">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Carousel Animation */}
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="w-[350px] md:w-[450px] p-10 glass rounded-[2.5rem] relative group"
              >
                <Quote className="absolute top-8 right-10 text-electric-blue/20" size={60} />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center font-bold text-electric-blue text-xl">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="#FFD700" color="#FFD700" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
