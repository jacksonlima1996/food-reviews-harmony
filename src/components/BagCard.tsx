
import React, { useState } from 'react';
import { BagOffer } from '@/types';
import { ShoppingBag } from 'lucide-react';

interface BagCardProps {
  bag: BagOffer;
}

const BagCard: React.FC<BagCardProps> = ({ bag }) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden animate-fade-up">
      <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
        <ShoppingBag 
          size={80} 
          className="text-food-orange opacity-80" 
        />
        <div className="absolute top-2 right-2 bg-food-orange text-white text-xs font-bold rounded-full px-2 py-1">
          -{bag.discount}%
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">{bag.name}</h3>
        
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{bag.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-food-orange">{formatCurrency(bag.price)}</span>
            <span className="text-xs text-gray-500 line-through">{formatCurrency(bag.originalPrice)}</span>
          </div>
          
          <button className="bg-food-orange hover:bg-food-orange-dark text-white rounded-xl px-3 py-2 flex items-center gap-2 text-sm transition-colors">
            <ShoppingBag size={16} />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
