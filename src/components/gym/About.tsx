import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 50, suffix: "+", label: "Weekly Classes" },
];

function Counter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);
  return <>{count}{suffix}</>;
}

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">
              More Than Just A <span className="text-primary">Gym</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With over a decade of experience, FitGym has been transforming lives through fitness. Our state-of-the-art
              facilities, certified trainers, and supportive community create the perfect environment for your fitness journey.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're a beginner or a seasoned athlete, our personalized programs and world-class equipment will help
              you reach your goals faster than ever.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Certified Trainers", "Modern Equipment", "Nutrition Plans", "24/7 Access"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="Personal trainer guiding a client"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm font-medium opacity-80">Years of Excellence</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-card border border-border">
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                <Counter target={s.value} suffix={s.suffix} started={isVisible} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
