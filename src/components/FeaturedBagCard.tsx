
import React from 'react';
import { BagOffer } from '@/types';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedBagCardProps {
  bag: BagOffer;
}

const FeaturedBagCard: React.FC<FeaturedBagCardProps> = ({ bag }) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
      <div className="relative h-28 overflow-hidden bg-gray-100 flex items-center justify-center">
        <ShoppingBag 
          size={40} 
          className="text-food-orange opacity-80" 
        />
        <div className="absolute top-2 right-2 bg-food-orange text-white text-xs font-bold rounded-full px-2 py-1">
          -{bag.discount}%
        </div>
        {bag.category && (
          <div className="absolute top-2 left-2 bg-white text-food-orange text-xs font-bold rounded-full px-2 py-1 border border-food-orange">
            {bag.category === 'sweet' ? 'Doce' : bag.category === 'savory' ? 'Salgada' : 'Mista'}
          </div>
        )}
      </div>
      
      <div className="p-3 flex-grow flex flex-col">
        <h3 className="font-semibold text-gray-800 mb-1 text-sm">{bag.name}</h3>
        
        <div className="flex flex-col mt-auto">
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-semibold text-food-orange">{formatCurrency(bag.price)}</span>
            <span className="text-xs text-gray-500 line-through">{formatCurrency(bag.originalPrice)}</span>
          </div>
          
          {bag.storeName && (
            <Link 
              to={`/store/${bag.storeId}`} 
              className="text-xs text-gray-700 hover:text-food-orange transition-colors flex items-center"
            >
              <span>{bag.storeName}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBagCard;
