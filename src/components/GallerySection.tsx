import { Card, CardContent } from "@/components/ui/card";
import idliVadaDosa from "@/assets/idli-vada-dosa.jpg";
import pavBhaji from "@/assets/pav-bhaji.jpg";
import jigarthanda from "@/assets/jigarthanda.jpg";
import gajarHalwa from "@/assets/gajar-halwa.jpg";
import northIndianThali from "@/assets/north-indian-thali.jpg";
import southIndianThali from "@/assets/south-indian-thali.jpg";

const galleryImages = [
  { image: pavBhaji, alt: "Delicious Pav Bhaji with butter" },
  { image: northIndianThali, alt: "Complete North Indian Thali" },
  { image: jigarthanda, alt: "Refreshing Jigarthanda drink" },
  { image: idliVadaDosa, alt: "South Indian breakfast spread" },
  { image: gajarHalwa, alt: "Rich Gajar ka Halwa dessert" },
  { image: southIndianThali, alt: "Traditional South Indian Thali" }
];

const GallerySection = () => {
  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Food Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feast your eyes on our delicious creations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <Card key={index} className="food-card border-primary/20 shadow-card hover:border-primary/40 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;