import { motion } from "motion/react";
import { MapPin, Phone, Clock, Send, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-blue font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Discuss Your <br />
              <span className="text-electric-blue">Next Project</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Have questions about our services or need a quick quote? Reach out to us and our experts will get back to you immediately.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 glass rounded-2xl text-electric-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    New Hafeezpet, Marthanda Nagar, <br />
                    Hyderabad, Telangana 500049
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 glass rounded-2xl text-electric-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    091000 09337
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 glass rounded-2xl text-electric-blue">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Open 24 Hours, 7 Days a Week
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-electric-blue transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 91000 09337"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-electric-blue transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-electric-blue transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-electric-blue text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,112,243,0.3)]"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-electric-blue/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 h-[450px] rounded-[2.5rem] overflow-hidden glass p-2"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.541456956424!2d78.3512345!3d17.4812345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939393939393%3A0x3939393939393939!2sThe%20Tesla%20Elevator%20And%20Solutions!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "2rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
