import { motion } from "motion/react";
import { Clock, Users, ShieldCheck, Award } from "lucide-react";

const highlights = [
  {
    icon: <Clock className="text-electric-blue" size={32} />,
    title: "24/7 Availability",
    desc: "Round-the-clock support for all your elevator emergencies and maintenance needs."
  },
  {
    icon: <Users className="text-electric-blue" size={32} />,
    title: "Skilled Technicians",
    desc: "Our team consists of highly trained and certified professionals with years of experience."
  },
  {
    icon: <ShieldCheck className="text-electric-blue" size={32} />,
    title: "High-Quality Materials",
    desc: "We use only the best components and materials to ensure longevity and safety."
  },
  {
    icon: <Award className="text-electric-blue" size={32} />,
    title: "Safety First",
    desc: "Strict adherence to international safety standards and local regulations."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-electric-blue font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Elevating Standards in <br />
              <span className="text-electric-blue">Hyderabad Since Day One</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              The Tesla Elevator and Solutions is a premier elevator service provider dedicated to delivering excellence in vertical transportation. We combine cutting-edge technology with unmatched expertise to provide solutions that are safe, efficient, and reliable.
            </p>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Based in the heart of Hyderabad, we understand the local landscape and the specific needs of our clients, from residential complexes to high-rise commercial buildings.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass rounded-2xl">
                <div className="text-3xl font-bold text-electric-blue mb-1">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Projects Done</div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="text-3xl font-bold text-electric-blue mb-1">10+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Years Exp</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="p-8 glass rounded-3xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
