import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  imageUrl: string;
  likes: number;
  tags: string[];
}

const ArtworkCard = ({ id, title, artist, artistId, imageUrl, likes, tags }: ArtworkCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="art-card overflow-hidden border-border/50">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden w-full pt-[100%]">
          <img 
            src={imageUrl} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-medium text-lg truncate">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">
          Автор: <a href={`/artists/${artistId}`} className="text-artist-primary hover:underline">{artist}</a>
        </p>
        
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="artwork-tag">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <a href={`/artwork/${id}`} className="text-sm text-artist-primary hover:underline">
          Подробнее
        </a>
        
        <button 
          onClick={handleLike}
          className="flex items-center gap-1 text-sm text-muted-foreground"
        >
          <Heart 
            className={`h-4 w-4 ${liked ? 'fill-artist-accent text-artist-accent' : ''}`} 
          />
          <span>{likeCount}</span>
        </button>
      </CardFooter>
    </Card>
  );
};

export default ArtworkCard;
