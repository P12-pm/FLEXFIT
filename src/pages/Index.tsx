import Navbar from "@/components/gym/Navbar";
import Hero from "@/components/gym/Hero";
import About from "@/components/gym/About";
import Plans from "@/components/gym/Plans";
import Facilities from "@/components/gym/Facilities";
import Testimonials from "@/components/gym/Testimonials";
import Gallery from "@/components/gym/Gallery";
import Contact from "@/components/gym/Contact";
import Footer from "@/components/gym/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Facilities />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
