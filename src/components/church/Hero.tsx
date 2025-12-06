import { Flame, PlayCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-fire/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--fire)/0.1),transparent_50%)]" />
      
      {/* Animated elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-fire/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Flame className="h-4 w-4 text-fire" />
            <span className="text-sm font-medium text-primary">Welcome to Holy Ghost Fire International</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience the{" "}
            <span className="text-gradient-gold">Power</span> of the{" "}
            <span className="text-primary">Holy Spirit</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Join our vibrant community of believers as we worship, grow together in faith, 
            and experience God's transforming presence in our lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-pulse-glow"
            >
              Join Us This Sunday
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#sermons")}
              className="px-8 py-6 text-lg group"
            >
              <PlayCircle className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              Watch Sermons
            </Button>
          </div>

          {/* Service Time */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-muted-foreground mb-2">Join us every Sunday</p>
            <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              9:00 AM & 11:00 AM
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
