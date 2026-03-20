import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import logo from "public/logo.png";

const Footer = () => {
  const socials = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl font-bold tracking-tighter">
            <img
            src={logo}
            alt="FLEXFIT logo"
            className="h-24 w-24 object-contain"
            width={96}
            height={96}
            loading="lazy"
          />
          </p>

          <div className="flex items-center gap-6">
            {["Home", "About", "Plans", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FitGym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
