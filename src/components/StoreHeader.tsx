
import React, { useState } from 'react';
import { Store } from '@/types';
import AnimatedRating from './AnimatedRating';
import { ShoppingBag } from 'lucide-react';

interface StoreHeaderProps {
  store: Store;
  compact?: boolean;
}

const StoreHeader: React.FC<StoreHeaderProps> = ({ store, compact = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`flex ${compact ? 'flex-row items-center' : 'flex-col md:flex-row items-start md:items-center'} gap-4 w-full animate-fade-up`}>
      <div className="relative overflow-hidden rounded-xl h-16 w-16 md:h-24 md:w-24 flex-shrink-0">
        <img
          src={store.logo}
          alt={store.name}
          className={`h-full w-full object-cover transition-all duration-700 ease-in-out ${imageLoaded ? 'image-loaded' : 'image-blur-placeholder'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
      
      <div className="flex flex-col space-y-1">
        <h1 className="text-xl md:text-2xl font-semibold">{store.name}</h1>
        
        <div className="flex items-center gap-2">
          <AnimatedRating 
            rating={store.averageRating} 
            animated={false}
            size={16}
            className="flex-shrink-0"
          />
          <span className="text-gray-600 text-sm">
            ({store.averageRating.toFixed(1)}) • {store.reviewCount} avaliações
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 gap-1">
          <ShoppingBag size={14} className="text-food-orange" />
          <span>{store.salesVolume}</span>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
