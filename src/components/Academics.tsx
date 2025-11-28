import { Microscope, Calculator, Globe, Palette, Music, Dumbbell } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const Academics = () => {
  const programs = [
    {
      icon: Microscope,
      title: "STEM Programs",
      description: "Advanced courses in Science, Technology, Engineering, and Mathematics with hands-on labs.",
      color: "text-blue-500"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From foundational concepts to advanced calculus and statistics.",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: "Humanities",
      description: "Literature, history, social studies, and world languages.",
      color: "text-amber-500"
    },
    {
      icon: Palette,
      title: "Visual Arts",
      description: "Comprehensive art program including painting, sculpture, and digital design.",
      color: "text-pink-500"
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Music, theater, and dance programs with multiple performance opportunities.",
      color: "text-violet-500"
    },
    {
      icon: Dumbbell,
      title: "Athletics",
      description: "Competitive sports teams and physical education promoting wellness.",
      color: "text-red-500"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-primary to-navy-dark mb-6 shadow-card">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Academic Programs
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed to challenge minds and inspire curiosity 
            across all disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={program.title}
              className="p-6 hover:shadow-card-hover transition-smooth animate-scale-in group cursor-pointer bg-gradient-to-br from-white to-blue-50 dark:from-card dark:to-navy-darker border-2 border-primary/20 hover:border-primary/50 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-smooth`}>
                <program.icon className={`h-7 w-7 ${program.color}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-muted-foreground">
                {program.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-navy-dark rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in">
          <h3 className="text-3xl font-display font-bold mb-4">
            Advanced Placement & Honors
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
            Over 25 AP courses and honors-level classes available, giving students 
            the opportunity to earn college credit and challenge themselves academically.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            View Course Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};
