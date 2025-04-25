import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import ResourceSection from "@/components/ResourceSection";
import { Button } from "@/components/ui/button";
import { Palette, Users, MessagesSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Секция "О платформе" */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">О платформе</h2>
            <p className="text-muted-foreground">
              АртКоннект — это место, где художники и любители искусства могут объединяться, 
              делиться своими работами и находить поддержку для реализации творческих проектов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Palette className="h-8 w-8 text-artist-primary" />}
              title="Галерея работ"
              description="Загружайте свои работы, получайте обратную связь и следите за творчеством других художников"
            />
            
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-artist-accent" />}
              title="Сообщество"
              description="Найдите единомышленников, заказчиков и просто ценителей вашего таланта"
            />
            
            <FeatureCard 
              icon={<MessagesSquare className="h-8 w-8 text-artist-highlight" />}
              title="Коллаборации"
              description="Объединяйтесь с другими художниками для создания совместных проектов и выставок"
            />
          </div>
        </section>
        
        <FeaturedArtworks />
        <ResourceSection />
        
        {/* CTA секция */}
        <section className="py-16 bg-gradient-to-r from-artist-primary/20 to-artist-accent/20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы присоединиться?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Станьте частью растущего сообщества художников. Регистрация займет меньше минуты.
            </p>
            
            <Button size="lg" className="bg-artist-primary hover:bg-artist-primary/90">
              Создать аккаунт
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-background border-t border-border/40 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Palette className="h-5 w-5 text-artist-primary" />
              <span className="font-bold gradient-text">АртКоннект</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              © 2025 АртКоннект. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/10">
      <div className="mb-4 p-3 rounded-full bg-secondary/30">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
