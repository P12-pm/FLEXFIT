import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "FitGym completely changed my lifestyle. I've lost 30 pounds and feel more energetic than ever!",
    name: "Sarah Johnson",
    role: "Member for 2 years",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    quote: "The trainers here are incredible. They created a program tailored exactly to my needs and goals.",
    name: "Michael Chen",
    role: "Member for 1 year",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote: "Best gym I've ever been to. The equipment is top-notch and the community is so supportive.",
    name: "Emma Rodriguez",
    role: "Member for 3 years",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">
            What Our <span className="text-primary">Members</span> Say
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Quote size={28} className="text-primary/30" />
              <p className="mt-4 text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
