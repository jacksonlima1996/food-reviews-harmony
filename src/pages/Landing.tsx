
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FeaturedBagCard from '@/components/FeaturedBagCard';
import StoreCard from '@/components/StoreCard';
import GuidedTourModal from '@/components/GuidedTourModal';
import { featuredBags, mockStores } from '@/data/mockData';
import { ShoppingBag, MapPin } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import AISummary from '@/components/AISummary';

const Landing = () => {
  const [showTour, setShowTour] = useState(false);
  const [hasSeenTour, setHasSeenTour] = useLocalStorage('has-seen-tour', false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Show the tour automatically if user hasn't seen it before
    if (!hasSeenTour) {
      setShowTour(true);
    }
  }, [hasSeenTour]);

  const handleTourClose = () => {
    setShowTour(false);
    setHasSeenTour(true);
  };

  const handleTourComplete = () => {
    setShowTour(false);
    setHasSeenTour(true);
    // Navigate to recommended bags (simulating this for now)
    navigate('/');
  };

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

        <section className="mb-8 featured-bags-section">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Sacolas em Destaque</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {featuredBags.map((bag) => (
              <FeaturedBagCard key={bag.id} bag={bag} />
            ))}
          </div>
        </section>

        <section className="mb-6 ai-summary-section">
          <AISummary 
            summary="Os usuários têm compartilhado excelentes experiências com nossas sacolas surpresa. A maioria relata economia significativa e produtos de ótima qualidade. 92% destacam a pontualidade das entregas e o bom atendimento dos estabelecimentos parceiros."
          />
        </section>

        <section className="reviews-section">
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

      {/* Guided Tour Modal */}
      {showTour && (
        <GuidedTourModal
          onClose={handleTourClose}
          onComplete={handleTourComplete}
          currentPage="landing"
        />
      )}
    </div>
  );
};

export default Landing;
