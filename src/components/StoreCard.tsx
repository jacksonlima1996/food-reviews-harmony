
import React, { useState } from 'react';
import { Store } from '@/types';
import { Link } from 'react-router-dom';
import AnimatedRating from './AnimatedRating';
import { ShoppingBag } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/store/${store.id}`} 
      className="glass-card rounded-xl overflow-hidden flex items-center p-3 animate-fade-up hover:shadow-md transition-shadow"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-xl flex-shrink-0 mr-3">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <ShoppingBag size={24} className="text-gray-400" />
          </div>
        )}
        <img
          src={store.logo}
          alt={store.name}
          className={`h-full w-full object-cover transition-all duration-700 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{store.name}</h3>
        
        <div className="flex items-center gap-2">
          <AnimatedRating 
            rating={store.averageRating} 
            animated={false}
            size={14}
          />
          <span className="text-gray-600 text-xs">
            ({store.averageRating.toFixed(1)})
          </span>
        </div>
        
        <div className="flex items-center text-xs text-gray-600 gap-1">
          <ShoppingBag size={12} className="text-food-orange" />
          <span>{store.salesVolume}</span>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
