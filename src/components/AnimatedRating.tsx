
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  animated?: boolean;
}

const AnimatedRating: React.FC<AnimatedRatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
  className,
  animated = true
}) => {
  const [activeStars, setActiveStars] = useState<number[]>([]);

  useEffect(() => {
    if (animated) {
      const timeout = setTimeout(() => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
          stars.push(i);
        }
        setActiveStars(stars);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      const stars = [];
      for (let i = 1; i <= rating; i++) {
        stars.push(i);
      }
      setActiveStars(stars);
    }
  }, [rating, animated]);

  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const starNumber = index + 1;
        return (
          <Star
            key={index}
            size={size}
            className={cn(
              "star-animation mr-0.5",
              activeStars.includes(starNumber) ? "active" : "text-gray-300",
              animated && activeStars.includes(starNumber) && "animate-star-pulse"
            )}
            fill={activeStars.includes(starNumber) ? "#F97316" : "none"}
          />
        );
      })}
    </div>
  );
};

export default AnimatedRating;
