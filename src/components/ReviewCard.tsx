
import React, { useState } from 'react';
import { Review } from '@/types';
import AnimatedRating from './AnimatedRating';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Trash2, User } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
  index: number;
  onDelete?: (reviewId: string) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index, onDelete }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const formattedDate = formatDistanceToNow(parseISO(review.date), { 
    addSuffix: true,
    locale: ptBR
  });

  const isUserReview = review.userName.includes('(Você)');

  return (
    <div 
      className="glass-card rounded-xl p-4 mb-4 animate-fade-up" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200 overflow-hidden">
          <User size={20} className="text-gray-400" />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-800">{review.userName}</h3>
              <div className="flex items-center mt-1 gap-2">
                <AnimatedRating 
                  rating={review.rating} 
                  animated={false}
                  size={14}
                />
                <span className="text-xs text-gray-500">{formattedDate}</span>
              </div>
            </div>
            
            {isUserReview && onDelete && (
              <button 
                onClick={() => onDelete(review.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                aria-label="Excluir comentário"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
          
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">{review.comment}</p>
          
          {review.imageUrl && (
            <Dialog>
              <DialogTrigger asChild>
                <div className="mt-3 img-hover-zoom cursor-pointer overflow-hidden rounded-lg max-w-[120px] h-[90px] relative">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <img
                    src={review.imageUrl}
                    alt="Pedido"
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${imageLoaded ? 'image-loaded' : 'image-blur-placeholder'}`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md mx-auto p-1 bg-transparent border-0 shadow-none">
                <img 
                  src={review.imageUrl} 
                  alt="Pedido em tamanho real" 
                  className="w-full h-auto rounded-lg object-contain max-h-[80vh] animate-scale-in"
                />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
