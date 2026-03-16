import { motion } from "framer-motion";
import { Dumbbell, Heart, Users, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const facilities = [
  { icon: Dumbbell, title: "Modern Equipment", desc: "Top-of-the-line machines and free weights for every muscle group." },
  { icon: Heart, title: "Cardio Zone", desc: "Treadmills, bikes, and rowing machines with entertainment screens." },
  { icon: Users, title: "Personal Training", desc: "One-on-one sessions with certified fitness professionals." },
  { icon: Zap, title: "Strength Training", desc: "Dedicated area for powerlifting and strength conditioning." },
  { icon: ShieldCheck, title: "Locker Rooms", desc: "Spacious, clean locker rooms with showers and sauna access." },
  { icon: Sparkles, title: "Hygiene First", desc: "Regular sanitization and cleaning protocols throughout the day." },
];

const Facilities = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="facilities" className="py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Facilities</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Everything you need under one roof.</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(210_70%_55%/0.08)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
