import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const News = () => {
  const newsItems = [
    {
      date: "March 15, 2024",
      title: "Young and Wise Academy Students Win State Science Fair",
      excerpt: "Three of our students took top honors at the state science competition with innovative research projects.",
      category: "Achievement"
    },
    {
      date: "March 10, 2024",
      title: "New STEM Lab Opening This Fall",
      excerpt: "State-of-the-art laboratory facility will enhance hands-on learning opportunities for all students.",
      category: "Facilities"
    },
    {
      date: "March 5, 2024",
      title: "Spring Musical: A Midsummer Night's Dream",
      excerpt: "Join us for our annual spring performance featuring talented student actors and musicians.",
      category: "Events"
    },
    {
      date: "February 28, 2024",
      title: "College Acceptance Rates Reach Record High",
      excerpt: "This year's senior class achieved a 98% college acceptance rate to prestigious institutions nationwide.",
      category: "Academic"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white dark:bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-primary to-navy-dark mb-6 shadow-card">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Latest News & Events
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and events at Young and Wise Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.title}
              className="p-6 hover:shadow-card-hover transition-smooth animate-scale-in group cursor-pointer bg-gradient-to-br from-white to-blue-50 dark:from-card dark:to-navy-darker border-2 border-primary/20 hover:border-primary/50 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                  {item.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-3 group-hover:text-accent transition-smooth">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {item.excerpt}
              </p>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-accent hover:text-accent/80 font-semibold"
              >
                Read More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};
