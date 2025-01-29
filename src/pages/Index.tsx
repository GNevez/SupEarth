import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { WhyOrganic } from "@/components/WhyOrganic";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <WhyOrganic />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;