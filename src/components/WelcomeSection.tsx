import { Card, CardContent } from "@/components/ui/card";
import northIndianThali from "@/assets/north-indian-thali.jpg";

const WelcomeSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-elegant border-primary/20">
              <CardContent className="p-0">
                <img
                  src={northIndianThali}
                  alt="Traditional Indian food platter"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center spice-glow">
              <span className="text-2xl">🍛</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Welcome to{" "}
                <span className="text-primary">Rama's Kitchen</span>
                {" "}- pure veg indian delights!
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                We are a <strong className="text-primary">100% vegetarian kitchen</strong> offering authentic south and north indian dishes, including onion-garlic-free meals on request. With rare regional recipes, top hygiene standards, and custom catering options, we bring flavorful, home-style food to your doorstep—perfect for daily meals, events.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-spice-cream rounded-lg">
                <div className="text-2xl mb-2">🌿</div>
                <h3 className="font-semibold text-primary">100% Vegetarian</h3>
                <p className="text-sm text-muted-foreground">Pure & Fresh</p>
              </div>
              
              <div className="text-center p-4 bg-spice-cream rounded-lg">
                <div className="text-2xl mb-2">🍛</div>
                <h3 className="font-semibold text-primary">Authentic Recipes</h3>
                <p className="text-sm text-muted-foreground">Traditional Taste</p>
              </div>
              
              <div className="text-center p-4 bg-spice-cream rounded-lg">
                <div className="text-2xl mb-2">🧑‍🍳</div>
                <h3 className="font-semibold text-primary">Expert Chefs</h3>
                <p className="text-sm text-muted-foreground">Skilled & Experienced</p>
              </div>
              
              <div className="text-center p-4 bg-spice-cream rounded-lg">
                <div className="text-2xl mb-2">🚚</div>
                <h3 className="font-semibold text-primary">Home Delivery</h3>
                <p className="text-sm text-muted-foreground">Fresh & Hot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;