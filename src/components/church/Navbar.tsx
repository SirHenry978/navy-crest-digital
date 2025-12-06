import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Sermons", href: "#sermons" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Flame className="h-8 w-8 text-fire transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-fire/20 blur-lg rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm md:text-base font-bold text-foreground leading-tight">
                Holy Ghost Fire
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">
                International
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-accent"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("#give")}
              className="hidden md:flex bg-primary hover:bg-primary/90"
            >
              Give Online
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("#give")}
                className="mt-2 bg-primary hover:bg-primary/90"
              >
                Give Online
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
