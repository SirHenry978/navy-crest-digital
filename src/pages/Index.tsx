import { Navbar } from "@/components/church/Navbar";
import { Hero } from "@/components/church/Hero";
import { About } from "@/components/church/About";
import { Services } from "@/components/church/Services";
import { Sermons } from "@/components/church/Sermons";
import { Events } from "@/components/church/Events";
import { Give } from "@/components/church/Give";
import { Contact } from "@/components/church/Contact";
import { Footer } from "@/components/church/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Sermons />
        <Events />
        <Give />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
