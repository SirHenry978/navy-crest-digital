import { Heart, Users, BookOpen, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Love & Compassion",
    description: "We believe in showing Christ's love through our actions and caring for one another.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships and supporting each other in our faith journey.",
  },
  {
    icon: BookOpen,
    title: "Biblical Truth",
    description: "Grounded in Scripture, teaching the uncompromised Word of God.",
  },
  {
    icon: Globe,
    title: "Global Mission",
    description: "Spreading the Gospel to all nations and making disciples worldwide.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Our Ministry</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Holy Ghost Fire International is a Spirit-filled ministry dedicated to transforming lives through the power of God.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="font-display text-2xl font-bold text-primary">M</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To ignite the fire of the Holy Spirit in every believer, equipping them to live victoriously 
                and fulfill their God-given purpose. We are committed to reaching the lost, discipling believers, 
                and building a community where everyone can encounter God's presence.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center mb-6">
                <span className="font-display text-2xl font-bold text-fire">V</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a global ministry that transforms communities through the demonstration of God's power, 
                raising up leaders who will carry the fire of revival to the ends of the earth. 
                We envision a world awakened by the Holy Spirit's fire.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="glass-card hover-lift text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
