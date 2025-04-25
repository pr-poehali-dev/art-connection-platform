import { useState } from "react";
import { Button } from "@/components/ui/button";
import ArtworkCard from "./ArtworkCard";

// Моковые данные для галереи
const ARTWORK_DATA = [
  {
    id: "1",
    title: "Весенний пейзаж",
    artist: "Мария Иванова",
    artistId: "maria123",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=745&auto=format&fit=crop",
    likes: 145,
    tags: ["акварель", "пейзаж", "весна"]
  },
  {
    id: "2",
    title: "Городской ритм",
    artist: "Александр Петров",
    artistId: "alex456",
    imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=765&auto=format&fit=crop",
    likes: 89,
    tags: ["масло", "городской пейзаж"]
  },
  {
    id: "3",
    title: "Абстракция №7",
    artist: "Елена Смирнова",
    artistId: "elena789",
    imageUrl: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=687&auto=format&fit=crop",
    likes: 217,
    tags: ["абстракция", "акрил", "холст"]
  }
];

const CATEGORIES = ["Все", "Живопись", "Скульптура", "Графика", "Стрит-арт", "Цифровое искусство"];

const FeaturedArtworks = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  return (
    <div className="container py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="gradient-text">Избранные работы</span>
      </h2>
      
      <div className="flex gap-2 overflow-x-auto mb-8 pb-2 justify-center flex-wrap">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "bg-artist-primary hover:bg-artist-primary/90" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTWORK_DATA.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            id={artwork.id}
            title={artwork.title}
            artist={artwork.artist}
            artistId={artwork.artistId}
            imageUrl={artwork.imageUrl}
            likes={artwork.likes}
            tags={artwork.tags}
          />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Button asChild variant="outline" className="border-artist-primary text-artist-primary hover:bg-artist-primary/10">
          <a href="/gallery">Все работы</a>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedArtworks;
