import { Flame, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Sermons", href: "#sermons" },
  { name: "Events", href: "#events" },
  { name: "Give", href: "#give" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Flame className="h-8 w-8 text-fire" />
                <div className="absolute inset-0 bg-fire/20 blur-lg rounded-full" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-foreground">
                  Holy Ghost Fire
                </span>
                <span className="block text-xs text-muted-foreground uppercase tracking-widest">
                  International
                </span>
              </div>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              A Spirit-filled ministry dedicated to igniting hearts with the fire of God's presence 
              and transforming lives through the power of the Gospel.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Service Times</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <p className="font-medium text-foreground">Sunday Worship</p>
                <p className="text-sm">9:00 AM & 11:00 AM</p>
              </li>
              <li>
                <p className="font-medium text-foreground">Wednesday Bible Study</p>
                <p className="text-sm">7:00 PM</p>
              </li>
              <li>
                <p className="font-medium text-foreground">Friday Prayer</p>
                <p className="text-sm">6:30 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Holy Ghost Fire International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
