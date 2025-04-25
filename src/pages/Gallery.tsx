import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

type Artwork = {
  id: number;
  title: string;
  artist: string;
  image: string;
  tags: string[];
  likes: number;
};

const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: "Городской пейзаж",
    artist: "Анна Соколова",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["городской пейзаж", "акрил"],
    likes: 124
  },
  {
    id: 2,
    title: "Абстракция №7",
    artist: "Михаил Петров",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["абстракция", "масло"],
    likes: 89
  },
  {
    id: 3,
    title: "Лесная тишина",
    artist: "Екатерина Иванова",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["пейзаж", "акварель"],
    likes: 156
  },
  {
    id: 4,
    title: "Ритмы города",
    artist: "Сергей Волков",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["стрит-арт", "граффити"],
    likes: 201
  },
  {
    id: 5,
    title: "Натюрморт с фруктами",
    artist: "Ольга Смирнова",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["натюрморт", "масло"],
    likes: 115
  },
  {
    id: 6,
    title: "Космические дали",
    artist: "Александр Новиков",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["абстракция", "смешанная техника"],
    likes: 232
  }
];

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");

  const filteredArtworks = ARTWORKS.filter(artwork => {
    const matchesSearch = 
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = 
      currentCategory === "all" || 
      artwork.tags.some(tag => tag.toLowerCase().includes(currentCategory.toLowerCase()));
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: "all", label: "Все работы" },
    { value: "городской", label: "Городские пейзажи" },
    { value: "абстракция", label: "Абстракция" },
    { value: "пейзаж", label: "Пейзажи" },
    { value: "стрит-арт", label: "Стрит-арт" },
    { value: "натюрморт", label: "Натюрморты" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h1 className="text-3xl font-bold gradient-text">Галерея художников</h1>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск работ и художников"
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mt-6" onValueChange={setCurrentCategory}>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Фильтры:</span>
          </div>
          
          <TabsList className="mt-2 flex flex-wrap gap-2">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="rounded-full"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredArtworks.map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
              </div>
              
              {filteredArtworks.length === 0 && (
                <div className="mt-12 flex flex-col items-center justify-center">
                  <p className="text-xl font-medium">Работы не найдены</p>
                  <p className="mt-2 text-muted-foreground">
                    Попробуйте изменить параметры поиска
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

const ArtworkCard = ({ artwork }: { artwork: Artwork }) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img 
          src={artwork.image} 
          alt={artwork.title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 rounded-full bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-artist-accent">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="text-xs font-medium">{artwork.likes}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium">{artwork.title}</h3>
        <p className="text-sm text-muted-foreground">{artwork.artist}</p>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {artwork.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-background/50">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;