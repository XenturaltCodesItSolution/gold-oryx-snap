import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">R</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Rama's Kitchen</h3>
                <p className="text-xs text-primary-foreground/80 uppercase tracking-wide">Pure Indian, Pure Veg, Pure Joy!</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Welcome to RAMA'S KITCHEN, where traditional Indian flavors meet modern convenience. Experience authentic vegetarian delights.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-light/20 p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-light/20 p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-light/20 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Home</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Menu</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Gallery</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Catering</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Services</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Monday - Friday:</span>
                <span className="text-secondary">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Saturday:</span>
                <span className="text-secondary">10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Sunday:</span>
                <span className="text-secondary">10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">123 Spice Street, Food District, City 560001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">info@ramaskitchen.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Rama's Kitchen. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;