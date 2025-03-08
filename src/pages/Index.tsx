
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StoreHeader from '@/components/StoreHeader';
import AnimatedRating from '@/components/AnimatedRating';
import BagCard from '@/components/BagCard';
import { mockStore, mockBags } from '@/data/mockData';
import { ChevronRight, Info } from 'lucide-react';

const Index = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-md mx-auto px-4 py-8">
        <div className="glass-card rounded-xl p-6 shadow-sm relative overflow-hidden mb-6">
          {/* Decorative element */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-food-orange opacity-5 rounded-full"></div>
          
          <h1 className="text-2xl font-bold mb-6 relative">
            Food to Save
            <div className="h-1 w-12 bg-food-orange mt-2 rounded-full"></div>
          </h1>
          
          <div className="mb-6">
            <StoreHeader store={mockStore} />
          </div>
          
          <div className="h-px bg-gray-100 my-6"></div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Sobre o estabelecimento</h2>
              <button 
                onClick={() => setShowDescription(!showDescription)}
                className="w-5 h-5 rounded-full bg-food-orange flex items-center justify-center text-white hover:bg-food-orange-dark transition-colors"
                aria-label={showDescription ? "Ocultar descrição" : "Mostrar descrição"}
              >
                <Info size={14} />
              </button>
            </div>
            
            {showDescription && (
              <p className="text-gray-600 animate-fade-in">
                Somos uma padaria artesanal comprometida em reduzir o desperdício de alimentos 
                oferecendo produtos de qualidade que estão próximos do vencimento a 
                preços reduzidos. Nossa missão é contribuir para um mundo mais 
                sustentável enquanto proporcionamos economia para nossos clientes.
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 gap-4">
              <div className="flex items-center gap-2">
                <AnimatedRating 
                  rating={mockStore.averageRating} 
                  className="flex-shrink-0"
                />
                <span className="text-gray-600 text-sm">
                  ({mockStore.averageRating.toFixed(1)}) • {mockStore.reviewCount} avaliações
                </span>
              </div>
              
              <Link 
                to="/reviews" 
                className="inline-flex items-center justify-center rounded-xl bg-food-orange px-5 py-2 font-medium text-white transition-all hover:bg-food-orange-dark focus:outline-none focus:ring-2 focus:ring-food-orange focus:ring-offset-2 animate-fade-in w-full sm:w-auto"
              >
                <span>Ver Avaliações</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Sacolas Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockBags.map((bag) => (
              <BagCard key={bag.id} bag={bag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
