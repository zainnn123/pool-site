import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <TrustSection />
        
        {/* Additional Vibe Section */}
        <section className="py-24 px-6 bg-primary text-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                Crystal Clear <br />
                <span className="italic">Perfection</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-md">
                We don't just clean pools; we maintain an oasis. Our white-glove service ensures your Scottsdale backyard is always ready for a dip.
              </p>
              <ul className="space-y-4">
                {["Weekly Maintenance", "Chemical Balancing", "Equipment Repair", "Acid Washes"].map((service) => (
                  <li key={service} className="flex items-center gap-3 text-sm uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-pool-blue" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=2070&auto=format&fit=crop" 
                alt="Pool Maintenance" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl font-semibold mb-2">AZURE</span>
            <span className="text-secondary text-sm">© 2026 Azure Scottsdale Pool Service</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-secondary">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="mailto:hello@azurepools.com" className="hover:text-primary transition-colors">hello@azurepools.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
