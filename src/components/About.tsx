import { BookOpen, Users, Award, Target } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Rigorous curriculum designed to challenge and inspire students to achieve their highest potential."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "A supportive environment where students, teachers, and families work together for success."
    },
    {
      icon: Award,
      title: "Character Development",
      description: "Building integrity, leadership, and ethical values alongside academic achievement."
    },
    {
      icon: Target,
      title: "Future Ready",
      description: "Preparing students for college, careers, and lifelong learning in a changing world."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-primary to-navy-dark mb-6 shadow-card">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              About
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 50 years, we've been committed to providing an outstanding educational 
            experience that shapes tomorrow's leaders and innovators at Young and Wise Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="p-6 text-center hover:shadow-card-hover transition-smooth animate-scale-in bg-gradient-to-br from-blue-50 to-blue-100 dark:from-card dark:to-navy-darker border-2 border-primary/30 hover:border-primary/60 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <value.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-white to-white-soft dark:from-card dark:to-card rounded-2xl p-8 md:p-12 shadow-white dark:shadow-elegant animate-fade-in border-2 border-gray-100 dark:border-transparent">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-card-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Young and Wise Academy is dedicated to fostering intellectual curiosity, 
                critical thinking, and personal growth in every student. We believe 
                in creating a challenging yet nurturing environment where students 
                can discover their passions and develop the skills needed to succeed 
                in an ever-changing world.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our comprehensive approach combines rigorous academics with character 
                education, preparing students not just for college, but for life.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Personalized Learning</h4>
                  <p className="text-sm text-muted-foreground">Tailored instruction to meet each student's unique needs and learning style.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Advanced Resources</h4>
                  <p className="text-sm text-muted-foreground">State-of-the-art facilities and technology to enhance the learning experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Expert Faculty</h4>
                  <p className="text-sm text-muted-foreground">Passionate educators committed to student success and growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
