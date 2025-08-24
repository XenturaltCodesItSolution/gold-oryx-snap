import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroFood from "@/assets/hero-food.jpg";
import idliVadaDosa from "@/assets/idli-vada-dosa.jpg";
import pavBhaji from "@/assets/pav-bhaji.jpg";
import northIndianThali from "@/assets/north-indian-thali.jpg";
import southIndianThali from "@/assets/south-indian-thali.jpg";

const menuData = {
  breakfast: [
    { name: "Idli/Vada/Dosa", price: "₹80", description: "Traditional South Indian breakfast" },
    { name: "Dhokla Fafda/Dhokla per plate", price: "₹50", description: "Gujarati steamed cake with chutney" },
    { name: "Uttapa Rava Dosa", price: "₹90", description: "Thick pancake with vegetables" },
    { name: "Set Dosa per plate", price: "₹70", description: "Mini dosas served as set" },
    { name: "Masala Dosa", price: "₹100", description: "Crispy dosa with spiced potato filling" },
    { name: "Rava Dosa", price: "₹110", description: "Semolina crepe crispy and light" },
    { name: "Cheese Bhajiya", price: "₹120", description: "Cheese fritters with spices" }
  ],
  lunch: [
    { name: "North Indian Thali", price: "₹150", description: "Complete North Indian meal with roti, dal, rice" },
    { name: "Gujarati Unlimited", price: "₹180", description: "Unlimited Gujarati thali with varieties" },
    { name: "Punjabi Chole", price: "₹120", description: "Spicy chickpea curry" },
    { name: "Rajasthani Thali", price: "₹170", description: "Traditional Rajasthani meal platter" },
    { name: "Seasonal Thali", price: "₹160", description: "Seasonal vegetables and specialties" }
  ],
  starters: [
    { name: "Paneer Chowmein", price: "₹80", description: "Indo-Chinese noodles with paneer" },
    { name: "Paneer Tikka Masala", price: "₹120", description: "Grilled paneer in rich gravy" },
    { name: "Paneer Crispy Tikka", price: "₹110", description: "Crispy fried paneer tikka" },
    { name: "Masala Paneer Tikka", price: "₹100", description: "Spiced paneer tikka" },
    { name: "Paneer Pakora Tikka", price: "₹90", description: "Paneer fritters tikka style" },
    { name: "Paneer Chilly Maily Seekh", price: "₹130", description: "Spicy paneer seekh kebab" },
    { name: "Paneer Chilly Kada Seekh", price: "₹140", description: "Hard spicy paneer seekh" }
  ],
  mainCourse: [
    { name: "Paneer Tikka Masala", price: "₹180", description: "Rich creamy paneer curry" },
    { name: "Paneer Mangan Tikka Masala", price: "₹200", description: "Special mangan style paneer" },
    { name: "Kadhai Paneer", price: "₹170", description: "Paneer cooked in kadhai" },
    { name: "Paneer Tikka Masala", price: "₹180", description: "Classic paneer in tomato gravy" },
    { name: "Palak Paneer Masala", price: "₹160", description: "Paneer in spinach gravy" },
    { name: "Paneer Butter Masala", price: "₹190", description: "Creamy butter paneer curry" },
    { name: "Paneer Lababdar", price: "₹180", description: "Rich and creamy paneer curry" },
    { name: "Paneer Kolhapuri", price: "₹170", description: "Spicy Kolhapuri style paneer" },
    { name: "Paneer Bhurji", price: "₹150", description: "Scrambled paneer with spices" },
    { name: "Rajma Masala", price: "₹140", description: "Red kidney beans curry" },
    { name: "Jeera Chawal", price: "₹80", description: "Cumin flavored rice" },
    { name: "Garlic Hakka/masala", price: "₹90", description: "Garlic flavored hakka noodles" },
    { name: "Paneer Hakka/masala", price: "₹110", description: "Paneer hakka noodles" }
  ]
};

const MenuSection = ({ title, items, backgroundImage, timeInfo }: { 
  title: string; 
  items: typeof menuData.breakfast; 
  backgroundImage: string;
  timeInfo?: string;
}) => {
  return (
    <div className="relative mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 rounded-xl" />
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🍛</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
          {timeInfo && (
            <p className="text-secondary text-lg font-medium">{timeInfo}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-start p-3 bg-black/30 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">{item.name}</h3>
                <p className="text-white/70 text-xs md:text-sm leading-tight">{item.description}</p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="text-secondary font-bold text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroFood})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-4">
            <Link to="/">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light/20 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Dive Into A World Of{" "}
            <span className="text-secondary">Exicting Flavours</span>
          </h1>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 mt-8 border border-secondary/30">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              DELICIOUS RESTAURANT
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-secondary">
              PURE VEG MENU
            </h3>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <MenuSection 
            title="Breakfast Menu" 
            items={menuData.breakfast}
            backgroundImage={idliVadaDosa}
          />
          
          <MenuSection 
            title="Lunch Menu" 
            items={menuData.lunch}
            backgroundImage={northIndianThali}
            timeInfo="12 Pm To 5 Pm"
          />
          
          <MenuSection 
            title="Starters" 
            items={menuData.starters}
            backgroundImage={pavBhaji}
            timeInfo="12 Pm To 10.30 Pm"
          />
          
          <MenuSection 
            title="Main Course" 
            items={menuData.mainCourse}
            backgroundImage={southIndianThali}
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;