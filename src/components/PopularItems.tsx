import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import idliVadaDosa from "@/assets/idli-vada-dosa.jpg";
import pavBhaji from "@/assets/pav-bhaji.jpg";
import jigarthanda from "@/assets/jigarthanda.jpg";
import gajarHalwa from "@/assets/gajar-halwa.jpg";
import northIndianThali from "@/assets/north-indian-thali.jpg";
import pulihora from "@/assets/pulihora.jpg";
import southIndianThali from "@/assets/south-indian-thali.jpg";

const popularItems = [
  { name: "Idli Vada Dosa", image: idliVadaDosa },
  { name: "Pav Bhaji", image: pavBhaji },
  { name: "Jigarthanda", image: jigarthanda },
  { name: "Gajar Ka Halwa", image: gajarHalwa },
  { name: "North Indian Thali", image: northIndianThali },
  { name: "Pulihora (Puliyotharai)", image: pulihora },
  { name: "South Indian Thali", image: southIndianThali },
  { name: "Idli Vada Dosa", image: idliVadaDosa }
];

const PopularItems = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Try Our Most{" "}
            <span className="text-primary">Popular Items</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Treat yourself to our must-try list that has everyone talking.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8">
          {popularItems.map((item, index) => (
            <Card key={index} className="food-card border-primary/20 shadow-card hover:border-primary/40">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm text-foreground leading-tight">
                    {item.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center">
          <Link to="/menu">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elegant transition-bounce"
            >
              View Full Menu →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;