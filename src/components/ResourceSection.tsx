import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Palette, Building, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const ResourceSection = () => {
  return (
    <div className="container py-16 bg-secondary/20 rounded-lg">
      <h2 className="text-3xl font-bold mb-2 text-center">Ресурсная поддержка</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Доступ к необходимым ресурсам, информации и юридическим документам для развития вашего творчества
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ResourceCard 
          icon={<Trophy className="w-10 h-10 text-artist-primary" />}
          title="Гранты и конкурсы"
          description="Актуальная информация о грантах, стипендиях и творческих конкурсах для художников"
          link="/resources/grants"
        />
        
        <ResourceCard 
          icon={<Paintbrush className="w-10 h-10 text-artist-accent" />}
          title="Художественные материалы"
          description="База данных поставщиков художественных товаров с отзывами и специальными предложениями"
          link="/resources/materials"
        />
        
        <ResourceCard 
          icon={<Building className="w-10 h-10 text-artist-highlight" />}
          title="Мастерские и студии"
          description="Аренда пространств для работы, выставочные площадки и коворкинги для художников"
          link="/resources/studios"
        />
      </div>
    </div>
  );
};

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ResourceCard = ({ icon, title, description, link }: ResourceCardProps) => {
  return (
    <Link to={link}>
      <Card className="h-full transition-all duration-300 hover:border-artist-primary/50 hover:shadow-md hover:shadow-artist-primary/20">
        <CardHeader>
          <div className="mb-2">{icon}</div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="text-artist-primary text-sm">Подробнее →</span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ResourceSection;
