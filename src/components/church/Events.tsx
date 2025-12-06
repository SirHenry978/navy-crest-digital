import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Christmas Eve Service",
    date: "December 24, 2024",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "Celebrate the birth of Christ with carols, candlelight, and a special message.",
    featured: true,
  },
  {
    title: "New Year's Eve Crossover Night",
    date: "December 31, 2024",
    time: "10:00 PM - 1:00 AM",
    location: "Main Sanctuary",
    description: "Welcome the new year with prayer, worship, and prophetic declarations.",
    featured: true,
  },
  {
    title: "Women's Conference 2025",
    date: "January 18-19, 2025",
    time: "9:00 AM",
    location: "Conference Hall",
    description: "A powerful gathering for women to be refreshed and empowered.",
    featured: false,
  },
  {
    title: "Youth Revival Weekend",
    date: "February 7-9, 2025",
    time: "6:00 PM",
    location: "Youth Center",
    description: "An encounter weekend for young people to experience God's fire.",
    featured: false,
  },
];

export const Events = () => {
  return (
    <section id="events" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't miss these special gatherings and life-changing events at Holy Ghost Fire International.
          </p>
        </div>

        {/* Featured Events */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {events
            .filter((e) => e.featured)
            .map((event) => (
              <Card
                key={event.title}
                className="glass-card hover-lift overflow-hidden border-primary/20"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-primary/20 to-fire/20 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded mb-3">
                      Featured Event
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="p-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Other Events */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {events
            .filter((e) => !e.featured)
            .map((event) => (
              <Card key={event.title} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View Full Calendar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
