import { Heart, CreditCard, Banknote, Repeat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const givingOptions = [
  {
    icon: CreditCard,
    title: "One-Time Gift",
    description: "Make a single donation to support our ministry and outreach programs.",
  },
  {
    icon: Repeat,
    title: "Recurring Giving",
    description: "Set up automatic monthly giving to consistently support God's work.",
  },
  {
    icon: Banknote,
    title: "Tithes & Offerings",
    description: "Honor God with your tithes and offerings as an act of worship.",
  },
];

export const Give = () => {
  return (
    <section id="give" className="section-padding bg-gradient-to-br from-primary/5 via-background to-fire/5">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="h-4 w-4 text-fire" />
            <span className="text-sm font-medium text-primary">Partner With Us</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Give <span className="text-primary">Online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Your generous giving enables us to spread the Gospel, support those in need, 
            and advance God's Kingdom around the world.
          </p>
        </div>

        {/* Scripture */}
        <Card className="glass-card mb-12 max-w-2xl mx-auto text-center">
          <CardContent className="p-8">
            <p className="text-lg md:text-xl italic text-foreground mb-2">
              "Each of you should give what you have decided in your heart to give, 
              not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <p className="text-primary font-medium">— 2 Corinthians 9:7</p>
          </CardContent>
        </Card>

        {/* Giving Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {givingOptions.map((option) => (
            <Card key={option.title} className="glass-card hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <option.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Give Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bank Transfer Info */}
        <Card className="glass-card max-w-xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Bank Transfer Details
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="text-foreground font-medium">Bank Name:</span> First National Bank</p>
              <p><span className="text-foreground font-medium">Account Name:</span> Holy Ghost Fire International</p>
              <p><span className="text-foreground font-medium">Account Number:</span> 1234567890</p>
              <p><span className="text-foreground font-medium">Routing Number:</span> 987654321</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
