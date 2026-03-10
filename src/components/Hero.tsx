import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" 
          alt="Pristine Scottsdale Pool" 
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
            Scottsdale's Most <br />
            <span className="italic">Trusted</span> Pool Service
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#quote"
              className="px-8 py-4 bg-white text-primary rounded-full font-medium text-lg hover:bg-pool-blue hover:text-white transition-all duration-300 shadow-2xl"
            >
              Get a Free Quote
            </motion.a>
            
            <a 
              href="tel:4805550123" 
              className="text-white font-medium text-lg border-b border-white/30 hover:border-white transition-all pb-1"
            >
              (480) 555-0123
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.2em]"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
