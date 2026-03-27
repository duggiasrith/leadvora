import { motion } from "motion/react";
import { Wrench, Settings, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: <Zap size={40} />,
    title: "Elevator Installation",
    desc: "State-of-the-art installation services for residential and commercial buildings with minimal downtime.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Wrench size={40} />,
    title: "Maintenance & Repair",
    desc: "Comprehensive maintenance plans and quick repair services to keep your elevators running smoothly.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Shield size={40} />,
    title: "Technical Support",
    desc: "24/7 expert technical assistance to resolve any issues and ensure maximum safety for users.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Settings size={40} />,
    title: "Custom Solutions",
    desc: "Tailor-made elevator designs and solutions that perfectly match your building's aesthetic and functional needs.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-electric-blue font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive <span className="text-electric-blue">Elevator Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto font-light"
          >
            We provide a full range of services to ensure your vertical transportation systems are always at their peak performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2.5rem] glass h-[400px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <motion.div
                  className="mb-6 text-electric-blue group-hover:scale-110 transition-transform duration-500 origin-left"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.desc}
                </p>
                
                {/* Glow Effect */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric-blue/10 blur-[100px] rounded-full group-hover:bg-electric-blue/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
