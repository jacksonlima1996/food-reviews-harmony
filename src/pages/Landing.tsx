
import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedBagCard from '@/components/FeaturedBagCard';
import StoreCard from '@/components/StoreCard';
import { featuredBags, mockStores } from '@/data/mockData';
import { ShoppingBag, ChevronRight, MapPin } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-md mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-food-orange">
                <ShoppingBag size={28} />
              </span>
              Food to Save
            </h1>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span>São Paulo, SP</span>
            </div>
          </div>
          <p className="text-gray-600">Combata o desperdício e economize em alimentação</p>
        </header>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Sacolas em Destaque</h2>
            <Link 
              to="/all-bags" 
              className="text-food-orange flex items-center text-sm font-medium"
            >
              Ver todas
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredBags.map((bag) => (
              <FeaturedBagCard key={bag.id} bag={bag} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Estabelecimentos Disponíveis</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {mockStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
