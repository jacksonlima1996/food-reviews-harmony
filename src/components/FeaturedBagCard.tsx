
import React, { useState } from 'react';
import { BagOffer } from '@/types';
import { ShoppingBag, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface FeaturedBagCardProps {
  bag: BagOffer;
}

const FeaturedBagCard: React.FC<FeaturedBagCardProps> = ({ bag }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    toast({
      title: "Sucesso!",
      description: "Itens adicionados na sua cesta de compras.",
      duration: 3000,
    });
    setIsDialogOpen(false);
    setQuantity(1);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
        <div 
          className="relative h-28 overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer"
          onClick={openDialog}
        >
          <ShoppingBag 
            size={40} 
            className="text-food-orange opacity-80" 
          />
          <div className="absolute top-2 right-2 bg-food-orange text-white text-xs font-bold rounded-full px-2 py-1">
            -{bag.discount}%
          </div>
        </div>
        
        <div className="p-3 flex-grow flex flex-col">
          <h3 
            className="font-semibold text-gray-800 mb-1 text-sm cursor-pointer hover:text-food-orange transition-colors"
            onClick={openDialog}
          >
            {bag.name}
          </h3>
          
          <div className="flex flex-col mt-auto">
            <div className="flex flex-col cursor-pointer" onClick={openDialog}>
              <span className="text-base font-semibold text-food-orange hover:opacity-90 transition-opacity">
                {formatCurrency(bag.price)}
              </span>
              <span className="text-xs text-gray-500 line-through">
                {formatCurrency(bag.originalPrice)}
              </span>
            </div>
            
            {bag.storeName && (
              <Link 
                to={`/store/${bag.storeId}`} 
                className="text-xs text-gray-700 hover:text-food-orange transition-colors flex items-center mt-1"
              >
                <span>{bag.storeName}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{bag.name}</DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center bg-gray-100 py-6 rounded-lg">
              <ShoppingBag size={80} className="text-food-orange" />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">
                {bag.description || 'Sacola surpresa com produtos selecionados de alta qualidade.'}
              </p>
              
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-food-orange">{formatCurrency(bag.price)}</span>
                  <span className="text-xs text-gray-500 line-through">{formatCurrency(bag.originalPrice)}</span>
                </div>
                
                <div className="bg-gray-100 rounded-full flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 font-medium">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="bg-food-orange hover:bg-food-orange-dark text-white rounded-xl py-3 font-medium transition-colors"
            >
              Adicionar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeaturedBagCard;
