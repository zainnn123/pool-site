import { motion } from "motion/react";
import { Star, ShieldCheck, Award, Users } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    location: "Silverleaf",
    text: "Azure has transformed our backyard. The water is consistently crystal clear, and their technicians are incredibly professional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "DC Ranch",
    text: "Best pool service in Scottsdale. They actually show up when they say they will and the app updates are a great touch.",
    rating: 5
  },
  {
    name: "David Miller",
    location: "Troon North",
    text: "Reliable, thorough, and fair pricing. I've recommended them to all my neighbors.",
    rating: 5
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-b border-black/5 pb-16">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-10 h-10 text-pool-blue mb-4" />
            <span className="text-xs uppercase tracking-widest text-secondary mb-2">Licensed & Bonded</span>
            <span className="font-serif text-xl font-medium">ROC #345678</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-pool-blue text-pool-blue" />
              ))}
            </div>
            <span className="text-xs uppercase tracking-widest text-secondary mb-2">Average Rating</span>
            <span className="font-serif text-xl font-medium">4.9/5.0 Stars</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-10 h-10 text-pool-blue mb-4" />
            <span className="text-xs uppercase tracking-widest text-secondary mb-2">Experience</span>
            <span className="font-serif text-xl font-medium">15+ Years Serving Scottsdale</span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-black/[0.02] border border-black/5"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-pool-blue text-pool-blue" />
                ))}
              </div>
              <p className="text-lg text-primary mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <span className="block font-semibold text-sm">{review.name}</span>
                <span className="text-xs text-secondary uppercase tracking-wider">{review.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
