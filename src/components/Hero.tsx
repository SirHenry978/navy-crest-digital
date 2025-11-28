import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden pt-16 pb-32">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white animate-fade-in-up leading-tight">
            Excellence in Education,
            <span className="block text-accent mt-2">Excellence in Life</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Empowering students to reach their full potential through rigorous academics, 
            innovative programs, and a supportive community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow group"
            >
              Schedule a Visit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-smooth shadow-card">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent">98%</div>
              <div className="text-white dark:text-white/90 mt-2 font-medium">College Acceptance</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-smooth shadow-card">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent">15:1</div>
              <div className="text-white dark:text-white/90 mt-2 font-medium">Student-Teacher Ratio</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-smooth shadow-card">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent">50+</div>
              <div className="text-white dark:text-white/90 mt-2 font-medium">Clubs & Activities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
