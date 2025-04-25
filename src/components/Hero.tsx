import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974')" }}
      />
      
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Сообщество художников</span>
            <br />для творчества без границ
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Выкладывайте свои работы, находите единомышленников и заказчиков.
            Получайте доступ к ресурсам, документам и инструментам для развития.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-artist-primary hover:bg-artist-primary/90">
              <Link to="/register">Присоединиться</Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-artist-primary text-artist-primary hover:bg-artist-primary/10">
              <Link to="/gallery">Смотреть галерею</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
