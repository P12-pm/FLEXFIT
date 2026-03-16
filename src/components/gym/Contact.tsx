import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const info = [
  { icon: MapPin, label: "Address", value: "123 Fitness Street, Palanpur" },
  { icon: Phone, label: "Phone", value: "+91 9876543221" },
  { icon: Mail, label: "Email", value: "info@fitgym.com" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 5AM–11PM · Sat–Sun: 7AM–9PM" },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">
            Visit <span className="text-primary">Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Drop by or reach out — we'd love to hear from you.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden bg-secondary border border-border h-[350px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin size={48} className="mx-auto mb-3 text-primary/40" />
              <p className="text-sm font-medium">Interactive Map</p>
              <p className="text-xs mt-1">123 Fitness Street, Palanpur</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
