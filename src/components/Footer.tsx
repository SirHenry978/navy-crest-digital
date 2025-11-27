import { GraduationCap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-accent" />
              <span className="text-lg font-display font-bold">Young and Wise Academy</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering students to reach their full potential through excellence in education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#academics" className="hover:text-accent transition-smooth">Academics</a></li>
              <li><a href="#news" className="hover:text-accent transition-smooth">News & Events</a></li>
              <li><a href="#contact" className="hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Student Portal</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Parent Resources</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Faculty Directory</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Apply Now</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Visit Campus</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Tuition & Aid</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Requirements</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Young and Wise Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
