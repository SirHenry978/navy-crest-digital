import { PlayCircle, Clock, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sermons = [
  {
    title: "Walking in Divine Purpose",
    speaker: "Pastor John Smith",
    date: "December 1, 2024",
    duration: "45 min",
    category: "Purpose",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=225&fit=crop",
  },
  {
    title: "The Fire Within",
    speaker: "Pastor John Smith",
    date: "November 24, 2024",
    duration: "52 min",
    category: "Holy Spirit",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
  },
  {
    title: "Breaking Every Chain",
    speaker: "Pastor Mary Johnson",
    date: "November 17, 2024",
    duration: "38 min",
    category: "Freedom",
    thumbnail: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&h=225&fit=crop",
  },
  {
    title: "Faith That Moves Mountains",
    speaker: "Pastor John Smith",
    date: "November 10, 2024",
    duration: "48 min",
    category: "Faith",
    thumbnail: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=225&fit=crop",
  },
];

export const Sermons = () => {
  return (
    <section id="sermons" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Sermons</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Miss a service? Catch up on our powerful messages and be inspired by God's Word.
          </p>
        </div>

        {/* Sermon Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sermons.map((sermon, index) => (
            <Card
              key={sermon.title}
              className="glass-card hover-lift overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                  {sermon.category}
                </span>
              </div>

              <CardContent className="p-4">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{sermon.speaker}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {sermon.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {sermon.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Sermons
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
