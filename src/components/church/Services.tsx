import { Clock, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    name: "Sunday Worship",
    day: "Every Sunday",
    times: ["9:00 AM", "11:00 AM"],
    description: "Join us for powerful worship, anointed preaching, and life-changing encounters.",
  },
  {
    name: "Wednesday Bible Study",
    day: "Every Wednesday",
    times: ["7:00 PM"],
    description: "Deep dive into God's Word with interactive teaching and discussion.",
  },
  {
    name: "Friday Prayer Meeting",
    day: "Every Friday",
    times: ["6:30 PM"],
    description: "Corporate intercession and spiritual warfare for breakthrough.",
  },
  {
    name: "Youth Service",
    day: "Every Saturday",
    times: ["4:00 PM"],
    description: "Engaging worship and relevant messages for young people.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We gather together to worship, learn, and grow in our faith. Find a service that fits your schedule.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className="glass-card hover-lift overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Time Section */}
                  <div className="bg-primary/10 p-6 md:p-8 flex flex-col items-center justify-center md:min-w-[160px] group-hover:bg-primary/15 transition-colors">
                    <Calendar className="h-6 w-6 text-primary mb-2" />
                    <p className="text-sm font-medium text-primary text-center">{service.day}</p>
                    <div className="mt-2 space-y-1">
                      {service.times.map((time) => (
                        <p key={time} className="font-display text-lg font-semibold text-foreground text-center">
                          {time}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Info */}
        <Card className="glass-card overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <MapPin className="h-4 w-4" />
                  Our Location
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Visit Us In Person
                </h3>
                <p className="text-muted-foreground mb-4">
                  123 Faith Avenue, City Center<br />
                  Your City, State 12345
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Doors open 30 minutes before service</span>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full md:w-[400px] h-[200px] rounded-xl bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Interactive Map</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
