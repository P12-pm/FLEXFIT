import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-0 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6 border border-primary/20">
              Premium Fitness
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            Transform Your
            <br />
            <span className="text-primary">Body.</span> Transform
            <br />
            Your <span className="text-primary">Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            Join our state-of-the-art facility with expert trainers, modern equipment, and a community that pushes you to be your best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#plans"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-steel-glow transition-all hover:shadow-[0_0_30px_hsl(210_70%_55%/0.3)] active:scale-95"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              Free Trial
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
