import { motion } from "motion/react";
import { Droplets } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 md:px-12 md:py-6 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Droplets className="w-6 h-6 text-pool-blue" />
          <span className="font-serif text-xl font-semibold tracking-tight">AZURE</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "About", "Reviews", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a 
            href="tel:4805550123" 
            className="text-sm font-semibold hover:text-pool-blue transition-colors"
          >
            (480) 555-0123
          </a>
        </motion.div>
      </div>
    </header>
  );
}
