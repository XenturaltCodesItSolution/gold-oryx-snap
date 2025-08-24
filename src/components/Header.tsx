import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-50 bg-primary gradient-primary py-4 px-6 shadow-elegant">
      <div className="container mx-auto flex items-center justify-between">
        {/* Menu Button */}
        <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-light/20 lg:hidden">
          <Menu className="h-5 w-5 mr-2" />
          Menu
        </Button>

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-primary-foreground">Rama's Kitchen</h1>
            <p className="text-xs text-primary-foreground/80 uppercase tracking-wide">Pure Indian, Pure Veg, Pure Joy!</p>
          </div>
        </div>

        {/* Contact Button */}
        <Button variant="secondary" size="sm" className="bg-primary-foreground text-primary hover:bg-secondary spice-glow">
          <Phone className="h-4 w-4 mr-2" />
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;