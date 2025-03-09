
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StoreHeader from '@/components/StoreHeader';
import AnimatedRating from '@/components/AnimatedRating';
import BagCard from '@/components/BagCard';
import { mockStore, mockBags } from '@/data/mockData';
import { ChevronRight, Info, ArrowLeft } from 'lucide-react';

const Index = () => {
  const [showDescription, setShowDescription] = useState(false);
  const { storeId } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-md mx-auto px-4 py-8">
        <header className="flex items-center mb-6">
          <Link 
            to="/" 
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-200 mr-2"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </Link>
          <h1 className="text-2xl font-bold relative">
            Food to Save
            <div className="h-1 w-12 bg-food-orange mt-2 rounded-full"></div>
          </h1>
        </header>
        
        <div className="glass-card rounded-xl p-6 shadow-sm relative overflow-hidden mb-6">
          {/* Decorative element */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-food-orange opacity-5 rounded-full"></div>
          
          <div className="mb-4">
            <StoreHeader store={mockStore} />
            
            <div className="flex items-center gap-2 mt-4">
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
              <p className="text-gray-600 mt-2">
                Somos uma padaria artesanal comprometida em reduzir o desperdício de alimentos 
                oferecendo produtos de qualidade que estão próximos do vencimento a 
                preços reduzidos. Nossa missão é contribuir para um mundo mais 
                sustentável enquanto proporcionamos economia para nossos clientes.
              </p>
            )}
          </div>
          
          <div className="flex justify-center mt-4">
            <Link 
              to={`/reviews/${storeId}`} 
              className="inline-flex items-center justify-center rounded-xl bg-food-orange px-5 py-2 font-medium text-white transition-all hover:bg-food-orange-dark focus:outline-none focus:ring-2 focus:ring-food-orange focus:ring-offset-2"
            >
              <span>Ver Avaliações</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
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
