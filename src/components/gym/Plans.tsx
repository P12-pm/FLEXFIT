import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Monthly",
    price: 1500,
    period: "/month",
    popular: false,
    features: ["Full Gym Access", "Locker Room", "Free WiFi", "1 Guest Pass/Month"],
  },
  {
    name: "Quarterly",
    price: 3500,
    period: "/3 months",
    popular: true,
    features: ["Everything in Monthly", "Personal Trainer (2x)", "Nutrition Consultation", "Sauna & Steam Room", "5 Guest Passes"],
  },
  {
    name: "Yearly",
    price: 12000,
    period: "/year",
    popular: false,
    features: ["Everything in Quarterly", "Unlimited Personal Training", "Priority Booking", "Merchandise Kit", "Unlimited Guests"],
  },
];

const Plans = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="plans" className="py-24 lg:py-32 bg-card/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Choose the plan that fits your fitness goals and budget.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(210_70%_55%/0.1)] ${
                plan.popular
                  ? "bg-primary/5 border-primary shadow-[0_0_30px_hsl(210_70%_55%/0.08)]"
                  : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-primary">{"\u20B9"}{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3.5 rounded-lg font-semibold text-sm transition-all active:scale-95 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-steel-glow hover:shadow-[0_0_25px_hsl(210_70%_55%/0.3)]"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
