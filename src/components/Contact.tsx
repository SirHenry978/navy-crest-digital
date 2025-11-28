import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-primary to-navy-dark mb-6 shadow-card">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Get in Touch
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to learn more about Young and Wise Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in p-6 rounded-lg hover:bg-accent/5 transition-smooth bg-gradient-to-br from-white to-blue-50 dark:from-card dark:to-navy-darker border-2 border-primary/20 hover:border-primary/50 shadow-card hover:shadow-card-hover hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">(555) 123-4567</p>
          </div>

          <div className="text-center animate-fade-in p-6 rounded-lg hover:bg-accent/5 transition-smooth bg-gradient-to-br from-white to-blue-50 dark:from-card dark:to-navy-darker border-2 border-primary/20 hover:border-primary/50 shadow-card hover:shadow-card-hover hover:-translate-y-1" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@youngandwise.edu</p>
          </div>

          <div className="text-center animate-fade-in p-6 rounded-lg hover:bg-accent/5 transition-smooth bg-gradient-to-br from-white to-blue-50 dark:from-card dark:to-navy-darker border-2 border-primary/20 hover:border-primary/50 shadow-card hover:shadow-card-hover hover:-translate-y-1" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">123 Academic Drive<br />Education City, EC 12345</p>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
            Follow Us
          </h3>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
