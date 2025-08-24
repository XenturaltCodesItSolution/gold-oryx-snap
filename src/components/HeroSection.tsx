import heroFood from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroFood})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium tracking-wide border border-secondary/30">
            || Enjoy An Exceptional Journey of Taste
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Pure Indian,{" "}
          <span className="block text-secondary spice-glow">Pure Veg,</span>
          <span className="block hero-text">Pure Joy!</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="w-16 h-1 bg-secondary rounded-full hidden sm:block" />
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            Experience the authentic flavors of India with our carefully crafted vegetarian delights
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full hidden sm:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;