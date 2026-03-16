import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Gym interior" },
  { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", alt: "Weight training" },
  { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Yoga class" },
  { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80", alt: "Cardio area" },
  { url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80", alt: "CrossFit area" },
  { url: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&q=80", alt: "Boxing ring" },
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-card/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Gallery</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">
            Our <span className="text-primary">Space</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Take a look inside our premium facility.</p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
