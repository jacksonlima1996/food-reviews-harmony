
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import StoreHeader from '@/components/StoreHeader';
import ReviewCard from '@/components/ReviewCard';
import AISummary from '@/components/AISummary';
import ReviewDialog from '@/components/ReviewDialog';
import { mockStore, mockReviews, aiSummary } from '@/data/mockData';
import { ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState(mockReviews);
  const { storeId } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleNewReview = ({ rating, comment, imageUrl }: { rating: number; comment: string; imageUrl?: string }) => {
    const newReview = {
      id: `review-${Date.now()}`,
      userName: "Roberto Carlos (Você)",
      rating,
      comment,
      date: format(new Date(), "yyyy-MM-dd"),
      imageUrl
    };

    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-md mx-auto px-4 py-4 md:py-8">
        <header className="flex items-center mb-6">
          <Link 
            to={`/store/${storeId}`} 
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-200 mr-2"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </Link>
          <h1 className="text-xl font-semibold">Avaliações</h1>
        </header>
        
        <div className="mb-6">
          <StoreHeader store={mockStore} />
        </div>
        
        <div className="mb-6">
          <AISummary summary={aiSummary} />
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4 flex items-center">
            <span>Comentários dos Clientes</span>
            <span className="ml-2 text-sm text-gray-500 font-normal">({reviews.length})</span>
          </h2>
          
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="glass-card rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-16 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))
          )}
        </div>
        
        <ReviewDialog onSubmit={handleNewReview} />
      </div>
    </div>
  );
};

export default Reviews;
