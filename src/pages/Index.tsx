import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularItems from "@/components/PopularItems";
import WelcomeSection from "@/components/WelcomeSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularItems />
      <WelcomeSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
